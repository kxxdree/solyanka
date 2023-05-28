import Vue from 'vue'
import VueRouter from 'vue-router'
import PageSignUp from '../components/AuthPages/PageSignUp'
import PageLogin from '../components/AuthPages/PageLogin'
import HomePage from '../components/HomePage/HomePage'
import MainPage from '../components/MainPage/MainPage'


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
    path: '/homepage',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/',
    name: 'mainpage',
    component: MainPage
  }
]

const router = new VueRouter({
  routes
})

export default router
