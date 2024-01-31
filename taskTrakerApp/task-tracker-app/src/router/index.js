import { createRouter, createWebHistory } from 'vue-router'

import MyAbout from '../views/About'
import MyHome from '../views/Home'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: MyHome
  },
  {
    path: '/about',
    name: 'About',
    component: MyAbout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
