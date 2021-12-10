import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/basic.scss'
import io from 'socket.io-client';


import VueSocketIO from 'vue-socket.io'
const connection = io.connect('http://e631-1-171-46-111.ngrok.io')
Vue.use( new VueSocketIO({
    connection,
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
}))



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
