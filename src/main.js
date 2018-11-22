/*
入口JS
 */
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import store from './store'
import router from './router'
import TopHeader from './components/TopHeader/TopHeader.vue'



Vue.component('TopHeader', TopHeader)
Vue.component(Button.name, Button)
import './mock/mockServer'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
