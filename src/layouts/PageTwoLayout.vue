<template>
  <div>
    <AppNavbar />
    <AppSlider />
    <PopulationData />  <!-- Certifique-se de que o nome do componente aqui corresponda ao registrado no script -->
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from '../components/AppNavbar.vue';
import AppSlider from '../components/AppSlider.vue';
import AppFooter from '../components/AppFooter.vue';
import PopulationData from '../components/PopulationData.vue';

export default {
  components: {
    AppNavbar,
    AppSlider,
    PopulationData,
    AppFooter
  }
}
</script>
