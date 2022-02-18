import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
//导入字体图标
import fonts from './assets/fonts/iconfont.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios'
//配置请求的根路径import axios from 'axios'
axios.defaults.baseURL = 'http://106.12.6.169:8888/api/private/v1'
axios.interceptors.request.use(config=>{
      config.headers.Authorization = window.sessionStorage.getItem('token')
      return config
})

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  fonts,
  render: function (h) { return h(App) }
}).$mount('#app')
