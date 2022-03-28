import { createRouter, createWebHistory } from 'vue-router';
import About from '../pages/about/index.vue'
import Home from '../pages/home/index.vue'

const routes = [
  { path: "/about", 
  component: About 
  },
  {
    path: "/home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
