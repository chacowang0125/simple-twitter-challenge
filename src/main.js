import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/basic.scss'
import SocketIO from 'socket.io-client';
import VueSocketIO from 'vue-socket.io'

const token = localStorage.getItem('token')


// const connection = io.connect('http://ce59-2001-b011-1005-5e71-545-8c13-cfec-99ff.ngrok.io',{
//   auth: { token },

//   auth: {token: store.state.token}
// }
// )

Vue.use(new VueSocketIO({
    debug: true,
    connection: SocketIO('http://c990-1-171-48-28.ngrok.io', { auth: { token }, autoConnect: false }),
    // options: {autoConnect: false},
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