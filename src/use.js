/*
 * @Description: 常用组件注册
 * @Date: 2022-06-12 21:14:33
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-12 21:22:25
 */
import Vue from "vue"
import ElementUI from "element-ui"
import { message } from "@utils/reset-message"
// 必须要注册,别忘记
Vue.use(ElementUI)
Vue.prototype.$message = message