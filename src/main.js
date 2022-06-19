/*
 * @Description: 入口文件
 * @Version: 0.1
 * @Autor: fulei
 * @Date: 2022-05-12 11:26:58
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-19 15:07:26
 */
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "@/components/index" // 自动注册全局的组件
import "@/use" //全局引入常用组件
import "@/styles/index.scss" // 引入基础样式
import "element-ui/lib/theme-chalk/index.css"
import Mixin from "@/mixins/index.js"
import afterEachHandler from "@/router/after-each"
import { beforeEachHandler } from "@/router/befor-each"
import SessionUtil from "@/utils/session-storage"
// 引入 echarts
import * as echarts from "echarts"
Vue.prototype.$echarts = echarts
Vue.prototype.$sessionUtil = SessionUtil
Vue.mixin(Mixin)
// 兼容IE
if (Number.parseInt === undefined) {
  Number.parseInt = window.parseInt
}
if (Number.parseFloat === undefined) {
  Number.parseFloat = window.parseFloat
}
router.beforeEach(beforeEachHandler)
//标题设置
router.afterEach(afterEachHandler)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
