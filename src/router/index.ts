import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import ErrorTest from '../views/ErrorTest.vue'
import NotFound from '../views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/error-test',
    name: 'ErrorTest',
    component: ErrorTest
  },
  
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router