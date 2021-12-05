import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentUser: {
            id: 3,
            account: "user3",
            name: "測試人員",
            avatar:
              "https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334",
            cover:
              "https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334",
            introduction: "我只是一個測試人員",
            isFollowed: 1,
            followings: 2,
            followers: 3,
            },
        openCreateNewTweetModal: false,
        openReplyPostModal: false,
        profileEditModal: false
    },
  getters: {
    getCurrentUser: state => {
      return state.currentUser
  }},
    mutations: {
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

