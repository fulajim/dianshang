import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/css/global.css"
//导入字体图标
import fonts from "./assets/fonts/iconfont.css"

import TreeTable from "vue-table-with-tree-grid"
Vue.component("tree-table", TreeTable)

//富文本编译器
import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
Vue.use(VueQuillEditor, /* { default global options } */)

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)

import axios from "axios";
//配置请求的根路径import axios from 'axios'
axios.defaults.baseURL = "http://106.12.6.169:8888/api/private/v1"
axios.interceptors.request.use((config) => {
  config.headers.Authorization = window.sessionStorage.getItem("token");
  return config;
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.filter("dateFormat", function (originVal) {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + "").padStart(2, "0")
  const d = (dt.getDate() + "").padStart(2, "0")
  const hh = (dt.getHours() + "").padStart(2, "0")
  const mm = (dt.getMinutes() + "").padStart(2, "0")
  const ss = (dt.getSeconds() + "").padStart(2, "0")

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
new Vue({
  router,
  fonts,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
