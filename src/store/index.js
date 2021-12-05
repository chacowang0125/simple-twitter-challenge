import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      currentUser: {
        id: -1,
        account: "",
        name:"",
        avatar: "",
        cover: "",
        introduction: "",
      },
        isAuthenticated: false,
        token: '',
        openCreateNewTweetModal: false,
        openReplyPostModal: false,
        profileEditModal: false
    },
  getters: {
    getCurrentUser: state => {
      return state.currentUser
  }},
    mutations: {
      setCurrentUser (state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 透過 API 取得的 currentUser
        ...currentUser
      }

      state.isAuthenticated = true
      state.token = localStorage.getItem('token')
    },
    revokeAuthentication (state) {
      state.currentUser = {}
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('token')
    },
        toggleCreateNewTweetModal(state) {
            state.openCreateNewTweetModal = !state.openCreateNewTweetModal
        },
        toggleReplyPostModal(state) {
            state.openReplyPostModal = !state.openReplyPostModal
        },
       toggleProfileEditModal (state) {
      state.profileEditModal = !state.profileEditModal
    }
    },
    actions: {},
    modules: {}
})

