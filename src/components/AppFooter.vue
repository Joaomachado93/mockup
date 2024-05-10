<template>
  <footer>
    <h1>Company</h1>
    <ul>
      <li v-for="text in texts" :key="text.id">
        {{ text.content }}
      </li>
    </ul>
  </footer>
</template>


<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      texts: [
        { id: 1, content: "Lorem Ipsum" },
        { id: 2, content: "Lorem Ipsum" },
        { id: 3, content: "Lorem Ipsum" },
        { id: 4, content: "Lorem Ipsum" },
        { id: 5, content: "Lorem Ipsum" },
        { id: 6, content: "Lorem Ipsum" },
        { id: 7, content: "Lorem Ipsum" },
        { id: 8, content: "Lorem Ipsum" },
        { id: 9, content: "Lorem Ipsum" },
        { id: 10, content: "Lorem Ipsum" },
        { id: 11, content: "Lorem Ipsum" },
        { id: 12, content: "Lorem Ipsum" },
        { id: 13, content: "Lorem Ipsum" },
        { id: 14, content: "Lorem Ipsum" },
        { id: 15, content: "Lorem Ipsum" },
        { id: 16, content: "Lorem Ipsum" }, 
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
footer {
  text-align: center;
  padding: 20px;
  background-color: #000;
  color: white;
  margin-top: 30px;

  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;

    li {
      margin-bottom: 10px;
      padding: 5px;
      border-radius: 5px;
      color: #eee;
    }
  }
}
</style>
