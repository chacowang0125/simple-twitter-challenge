import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        openCreateNewTweetModal: false,
        openReplyPostModal: false,
    },
    mutations: {
        toggleCreateNewTweetModal(state) {
            state.openCreateNewTweetModal = !state.openCreateNewTweetModal
        },
        toggleReplyPostModal(state) {
            state.openReplyPostModal = !state.openReplyPostModal
        }
    },
    actions: {},
    modules: {}
})