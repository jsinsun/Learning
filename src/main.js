import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mock from '../mock/mock'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(mock)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
