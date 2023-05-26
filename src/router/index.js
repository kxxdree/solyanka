import Vue from 'vue'
import VueRouter from 'vue-router'
import PageSignUp from '../components/AuthPages/PageSignUp'
import PageLogin from '../components/AuthPages/PageLogin'
import HomePage from '../components/HomePage/HomePage'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: PageLogin
  },
  {
    path: '/signup',
    name: 'signup',
    component: PageSignUp
  },
  {
    path: '/',
    name: 'homepage',
    component: HomePage
  }
]

const router = new VueRouter({
  routes
})

export default router
