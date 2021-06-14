import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/CreateCar')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/ListCar')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditCar')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router