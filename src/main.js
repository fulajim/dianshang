import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios'
//配置请求的根路径import axios from 'axios'
axios.defaults.baseURL = 'http://106.12.6.169:8888/api/private/v1'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
