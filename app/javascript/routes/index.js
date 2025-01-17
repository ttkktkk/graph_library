import { createRouter, createWebHistory } from 'vue-router';
import Index from 'app/src/components/index.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
