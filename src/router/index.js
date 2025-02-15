import { createRouter, createWebHistory } from 'vue-router';
import ProductPage from '../components/ProductPage.vue';

const routes = [
  {
    path: '/',
    name: 'ProductPage',
    component: ProductPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
