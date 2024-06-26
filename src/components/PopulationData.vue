<template>
  <div class="parent-container">
    <div class="parent-child">
      <div class="controls">
        <h1>Population</h1>
        <div>
          <input type="text" v-model="searchText" placeholder="Search by country..." style="margin-right: 10px;">
          <img :src="require('@/assets/ordernar-ascendente.png')" @click="sort('asc')" alt="Sort Ascending" class="img-ord">
          <img :src="require('@/assets/descendente.png')" @click="sort('desc')" alt="Sort Descending" class="img-ord">
          <select v-model="selectedYear">
            <option value="">Filter Year</option>
            <option v-for="(year, index) in availableYears" :key="index" :value="year">{{ year }}</option>
          </select>
        </div>
      </div>
      <div class="accordion" v-for="item in paginatedData" :key="item.ID" @click="toggle(item)">
        <div class="accordion-header">
          <h3>{{ item.Year }}</h3>
          <span class="toggle-icon">{{ item.isOpen ? '-' : '+' }}</span>
        </div>
        <div class="contain-accordion" v-show="item.isOpen">
          <div>
            <div class="accordion-text">Country</div>
            <div>{{ item.Nation }}</div>
          </div>
          <div>
            <div class="accordion-text">Population</div>
            <div>{{ item.Population }}</div>
          </div>
          <div>
            <div class="accordion-text">Source</div>
            <div>{{ sourceName }}</div>
          </div>
        </div>
      </div>
      <button class="show" @click="loadMore" v-if="visibleCount < filteredData.length">Show More</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PopulationData',
  data() {
    return {
      populationData: [],
      selectedYear: '',
      searchText: '',
      visibleCount: 4,
      sourceName: '',
    };
  },
  computed: {
    availableYears() {
      return [...new Set(this.populationData.map(data => data.Year))];
    },
    filteredData() {
      let data = this.populationData;
      if (this.selectedYear) {
        data = data.filter(item => item.Year === this.selectedYear);
      }
      if (this.searchText) {
        data = data.filter(item => item.Nation.toLowerCase().includes(this.searchText.toLowerCase()));
      }
      return data;
    },
    paginatedData() {
    return this.filteredData.slice(0, this.visibleCount);
  },
  },
  methods: {
    fetchData() {
      axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        .then(response => {
          this.populationData = response.data.data.map(item => ({ ...item, isOpen: false }));
          this.sourceName = response.data.source[0]?.annotations?.source_name || 'Unknown';
        })
        .catch(error => console.error('Error fetching population data:', error));
    },
    sort(order) {
      let sortedData = [...this.filteredData];
      sortedData.sort((a, b) => order === 'asc' ? a.Year - b.Year : b.Year - a.Year);
      this.populationData = sortedData;
    },
    loadMore() {
      if (this.visibleCount < this.filteredData.length) {
        this.visibleCount += 4;
      }
    },


    toggle(item) {
      item.isOpen = !item.isOpen;
    }
  },
  created() {
    this.fetchData();
  }
};

</script>
<style lang="scss" scoped>
.parent-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .parent-child {
    width: 86%; 
    place-self: flex-end; 
    display: flow;

    .controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      .img-ord {
        width: 14px;
        margin-right: 12px;
        cursor: pointer;
      }

      select {
        height: 33px;
        background-color: lightgrey;
      }
    }

    .accordion {
      cursor: pointer;
      padding: 10px;
      border: 1px solid #ccc;
      margin-top: 5px;

      .accordion-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
          margin: 0;
          flex-grow: 1;
        }
      }

      .toggle-icon {
        cursor: pointer;
        font-weight: bold;
        margin-right: 5px; // Added some margin for better spacing
      }

      .contain-accordion {
        display: flex;
        justify-content: space-between;

        .accordion-text {
          font-weight: bold;
        }
      }
    }

    .show {
      width: 25%;
      text-align: center;
      height: 36px;
      background-color: lightgrey;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      cursor: pointer;
    }
  }
}

@media (max-width: 768px) {
  .controls, .accordion {
    flex-direction: column;
  }

  .controls img, .controls select {
    margin: 10px 6px; 
  }

  .parent-container {
    flex-direction: unset;
    padding: 10px;
  }

  .accordion {
    padding: 5px;

    h3 {
      font-size: 16px;
    }

    div[style*="width: 86%"] {
      width: 100%;
    }

    div[style*="display: flex;"] {
      flex-direction: column;
    }
  }
}
</style>
