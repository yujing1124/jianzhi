import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.css'
import BMap from 'BMap'
import axios from "axios"
import './plugin/utils.js'
<<<<<<< HEAD
import ElementUI from 'element-ui'
//import  './plugin/font'

Vue.config.productionTip = false
Vue.use(ElementUI)
=======
//import  './plugin/font'

Vue.config.productionTip = false
>>>>>>> 7114ea9bcc5c355bc1f3d0333c9fa133afb42e14
Vue.use(axios)


new Vue({
  router, 
  store,
  render: h => h(App)
}).$mount('#app')
