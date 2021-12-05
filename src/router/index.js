import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import UserMain from '../views/UserMain.vue'
import NotFound from '../views/NotFound.vue'
import AdminSignIn from '../views/AdminSignIn.vue'
import store from '../store'
import usersAPI from './../apis/users'



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

router.beforeEach(async (to, from, next) => {
  // 從 localStorage 取出 token
  const token = localStorage.getItem('token')
  const tokenInStore = store.state.token

  let isAuthenticated = store.state.isAuthenticated

  // 有 token 的情況下，才向後端驗證
  if (token && token !== tokenInStore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
    
  }

  const pathsWithoutAuthentication = ['SignIn', 'sign-up']

  // 如果 token 無效，且要去除了登入和註冊以外的其他頁面，則轉址到登入頁
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
      console.log('checked')
    next('/signin')
    return
  }

  // 如果 token 有效，且要去登入和註冊頁，則轉址到餐廳論壇首頁
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/home')
    return
  }

  next()
})

export default router