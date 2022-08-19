import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewHome from '../views/NewHome.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: NewHome
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
