import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

// 引入基本样式
import './assets/styles/reset.css'
import './assets/styles/border.css'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
