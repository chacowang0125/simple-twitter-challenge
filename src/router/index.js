import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import AdminSignIn from '../views/AdminSignIn.vue'


Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    name: 'root',
    redirect: '/signin'
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/admin/signin',
    name: 'AdminSignIn',
    component: AdminSignIn
  },
]

const router = new VueRouter({
  routes
})

export default router
