import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import UserMain from '../views/UserMain.vue'
import NotFound from '../views/NotFound.vue'
import AdminSignIn from '../views/AdminSignIn.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'root',
    redirect: '/signin'
}, {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
}, {
    path: '/signup',
    name: 'sign-up',
    component: () =>
        import ('../views/SignUp.vue')
}, {
    path: '/tweets',
    name: 'tweets',
    component: UserMain
}, {
    path: '/user/edit',
    name: 'user-edit',
    component: () =>
        import ('../views/UserEdit.vue')
}, {
    path: '/admin/signin',
    name: 'AdminSignIn',
    component: AdminSignIn
}, {
    path: '/admin/main',
    name: 'AdminMain',
    component: () =>
        import ('../views/AdminMain.vue')
}, {
    path: '*',
    name: 'not-found',
    component: NotFound
}]


const router = new VueRouter({
    routes
})

export default router