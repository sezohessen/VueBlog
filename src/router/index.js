import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewHome from '../views/NewHome.vue'
import Details from '../views/Details.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: NewHome
  },
  {
    path:'/posts/:id',
    name:'Details',
    component:Details,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
