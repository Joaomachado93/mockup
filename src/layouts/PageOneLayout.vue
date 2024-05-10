<template>
    <div>
      <AppNavbar />
      <AppSlider />
      <div class="container">
        <Container />
        <ContainerSecond />
      </div>
      <AppFooter />
    </div>
</template>
  
  <script>
  import AppNavbar from '../components/AppNavbar.vue';
  import AppSlider from '../components/AppSlider.vue';
  import AppFooter from '../components/AppFooter.vue';
  import Container from '../components/Container.vue';
  import ContainerSecond from '../components/ContainerSecond.vue';
  
  export default {
    components: {
      AppNavbar,
      AppSlider,
      Container,
      ContainerSecond,
      AppFooter
    }
  }
  </script>
  <style>
  .container{
    margin: 0 100px;
  }
  @media (max-width: 768px) {
    .container{
      margin: 0 0px;
    }
  }
</style>
  
  