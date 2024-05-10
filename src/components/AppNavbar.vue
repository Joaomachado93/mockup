<template>
  <nav @click="handleNavClick">
    <img src="@/assets/logo.png" alt="Logo" style="width: 112px;">
    <ul :class="{ 'open': menuOpen }" ref="menu">
      <li v-for="item in menuItems" :key="item.name">
        <router-link :to="item.path">{{ item.label }}</router-link>
      </li>
    </ul>
    <button @click="toggleMenu" class="hamburger">&#9776;</button>
    <div class="search-container" ref="searchContainer">
      <input v-show="searchOpen" ref="searchInput" v-model="searchText" @keyup.enter="logSearch" type="text" placeholder="Search...">
      <button @click="toggleSearch">🔍</button>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      menuItems: [
        { name: 'page1', path: '/page1', label: 'Page 1' },
        { name: 'page2', path: '/page2', label: 'Page 2' }
      ],
      searchText: '',
      searchOpen: false,
      menuOpen: false
    };
  },
  methods: {
    toggleSearch() {
      this.searchOpen = !this.searchOpen;
      if (this.searchOpen) {
        this.$nextTick(() => {
          this.$refs.searchInput.focus();
        });
      } else {
        this.logSearch();
      }
    },
    logSearch() {
      if (this.searchText.trim() !== '') {
        console.log(this.searchText);
      }
      this.searchText = '';
      this.searchOpen = false;
    },
    toggleMenu(event) {
      this.menuOpen = !this.menuOpen;
      event.stopPropagation();
    },

    handleNavClick(event) {
      if (this.$refs.searchContainer && !this.$refs.searchContainer.contains(event.target)) {
        this.searchOpen = false;
      }
      if (this.$refs.menu && !this.$refs.menu.contains(event.target)) {
        this.menuOpen = false;
      }
    }

  }
};
</script>


<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  padding: 10px;
  position: relative; 
  img {
    flex-shrink: 0;
  }

  .hamburger {
    display: none;
    font-size: 24px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }

  ul {
    list-style: none;
    flex-direction: row;
    display: flex;
    color: white;
    margin: 0;
    padding: 0;
    width: 100%;
    justify-content: center;

    li {
      padding: 10px 15px;
      &:hover {
        background-color: #f0f0f0;
        color: black;
      }
    }

    @media (max-width: 768px) {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: black;
      z-index: 1000;

      &.open {
        display: flex;
        flex-direction: column;
      }
    }
  }

  .search-container {
    flex-grow: 1;
    display: flex;
    align-items: center;
    position: relative;
  }
}
</style>
