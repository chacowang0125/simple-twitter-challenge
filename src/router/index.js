import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import UserMain from '../views/UserMain.vue'
import NotFound from '../views/NotFound.vue'
import AdminSignIn from '../views/AdminSignIn.vue'
import Modal from '../views/Modal.vue'


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
    path: '/user/tweet',
    name: 'user-tweet',
    component: () =>
        import ('../views/Tweet.vue')
}, {
    path: '/user/followed',
    name: 'user-followed',
    component: () =>
        import ('../views/UserFollowed.vue'),
}, {
    path: '/user/following',
    name: 'user-following',
    component: () =>
        import ('../views/UserFollowing.vue'),
}, {
    path: '/user/modal',
    name: 'create-tweet-modal',
    component: Modal
}, {
    path: '/admin/signin',
    name: 'AdminSignIn',
    component: AdminSignIn
}, {
    path: '*',
    name: 'not-found',
    component: NotFound
}]


const router = new VueRouter({
    routes
})

export default router