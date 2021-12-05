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
        path: '/home',
        name: 'home',
        component: UserMain
    }, {
        path: '/user/edit',
        name: 'user-edit',
        component: () =>
            import ('../views/UserEdit.vue')
    }, {
        path: '/tweets/:id',
        name: 'tweets-detail',
        component: () =>
            import ('../views/Tweet.vue')
    }, {
        path: '/user/:id/followed',
        name: 'user-followed',
        component: () =>
            import ('../views/UserFollowed.vue'),
    }, {
        path: '/user/:id/following',
        name: 'user-following',
        component: () =>
            import ('../views/UserFollowing.vue'),
    }, {
        path: '/profile/:id',
        component: () =>
            import ('../views/UserProfile.vue'),
        children: [{
                path: '/',
                name: 'tweet',
                component: () =>
                    import ('../components/UserTweetFeed.vue')
            },
            {
                path: 'comment',
                name: 'comment',
                component: () =>
                    import ('../components/UserCommentFeed.vue')
            },
            {
                path: 'liked',
                name: 'liked',
                component: () =>
                    import ('../components/UserLikedFeed.vue')
            },
        ]
    },
    {
        path: '/admin/signin',
        name: 'AdminSignIn',
        component: AdminSignIn
    }, {
        path: '/admin/main',
        name: 'AdminMain',
        component: () =>
            import ('../views/AdminMain.vue')
    }, {
        path: '/admin/users',
        name: 'AdminUsers',
        component: () =>
            import ('../views/AdminUsers.vue')
    }, {
        path: '*',
        name: 'not-found',
        component: NotFound
    }
]


const router = new VueRouter({
    routes
})

export default router