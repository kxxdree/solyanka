import Vue from 'vue'
import VueRouter from 'vue-router'
import PageSignUp from '../components/PageSignUp'
import PageLogin from '../components/PageLogin'


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
  }
]

const router = new VueRouter({
  routes
})

export default router
