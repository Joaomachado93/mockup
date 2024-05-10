import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import PageOneLayout from './layouts/PageOneLayout.vue'; 
import PageTwoLayout from './layouts/PageTwoLayout.vue';

const routes = [
  { path: '/page1', component: PageOneLayout },
  { path: '/page2', component: PageTwoLayout }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
