import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import * as echarts from 'echarts';
// import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import "@/utils/china.js";

// Vue.use(echarts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

