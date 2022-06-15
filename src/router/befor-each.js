/*
 * @Description:
 * @Date: 2022-06-13 11:14:05
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-15 22:33:55
 */
// import router from "@/router" // 引入路由实例
const whiteList = ["/login", "/404"] // 定义白名单  所有不受权限控制的页面

function beforeEachHandler(to, from, next) {
  if (
    whiteList
      .toString()
      .toLowerCase()
      .indexOf(to.path.toString().toLowerCase()) > -1
  ) {
    //在白名单--放行
    next()
  } else {
    //不在白名单--跳登录
    next("/login")
  }
}
export { beforeEachHandler }