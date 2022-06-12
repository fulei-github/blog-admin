/*
 * @Description: 路由跳转设置浏览器title
 * @Date: 2022-06-12 21:14:33
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-12 21:20:56
 */

import { setTitle } from "@/utils/common.js"
function afterEachHandler(to, from) {
  let { title } = to.meta
  title || (title = to.name)
  if (title) {
    setTitle(title)
  }
}

export default afterEachHandler

