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
      <div class="accordion" v-for="item in filteredData" :key="item.ID" @click="toggle(item)">
        <h3>{{ item.Year }}</h3>
        <div class="contain-accordion">
          <div>
            <div class="accordion-text" v-show="item.isOpen">Country</div>
            <div v-show="item.isOpen">{{ item.Nation }}</div>
          </div>
          <div>
            <div class="accordion-text" v-show="item.isOpen">Population</div>
            <div v-show="item.isOpen">{{ item.Population }}</div>
          </div>
          <div>
            <div class="accordion-text" v-show="item.isOpen">Source</div>
            <div v-show="item.isOpen">{{ sourceName }}</div>
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
      visibleCount: 4,
      sourceName: '',
    };
  },
  computed: {
    availableYears() {
      return [...new Set(this.populationData.map(data => data.Year))];
    },
    filteredData() {
      return this.selectedYear ? this.populationData.filter(data => data.Year === this.selectedYear) : this.populationData;
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
      let sortedData = [...this.populationData];
      sortedData.sort((a, b) => order === 'asc' ? a.Year - b.Year : b.Year - a.Year);
      this.populationData = sortedData;
    },

    loadMore() {
      this.visibleCount += 4;
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

<style scoped>
.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.img-ord{
  width: 14px;
  margin-right: 12px;
  cursor: pointer;
}
select {
  height: 33px;
  background-color: lightgrey;
}

.accordion {
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  margin-top: 5px;
}
.contain-accordion{
  display: flex;
  display: flex;
  justify-content: space-between;
}
.accordion-text{
  font-weight: bold;
}
.accordion h3 {
  margin: 0;
}
.parent-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.parent-child{
  width: 86%; 
  place-self: flex-end; 
  display: flow;
}
.accordion p {
  margin: 10px 0 0;
}
.show{
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
  }

  .accordion h3 {
    font-size: 16px; 
  }

  div[style*="width: 86%"] {
    width: 100%; 
  }

  .accordion div[style*="display: flex;"] {
    flex-direction: column;
  }
}
</style>
