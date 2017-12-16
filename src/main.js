// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./app"
import router from "./router"
import VueResource from "vue-resource"
import VueAwesomeSwiper from "vue-awesome-swiper"

import "./js/unit/common.js"

import "swiper/dist/css/swiper.css"
import "./css/unit/base.scss"

Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)


// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
// vue-resource 允许跨域携带cookie
Vue.http.options.withCredentials = true

/* eslint-disable no-new */
new Vue({
  el: "#app",//指向index.html.
  router,
  template: "<app/>",
  components: { App }
})
