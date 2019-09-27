import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.css'
import BMap from 'BMap'
import axios from "axios"
import './plugin/utils.js'
import ElementUI from 'element-ui'
//import  './plugin/font'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(axios)


new Vue({
  router, 
  store,
  render: h => h(App)
}).$mount('#app')
