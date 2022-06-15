/*
 * @Description: 登陆相关
 * @Date: 2022-06-15 22:38:40
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-15 22:39:27
 */
// 获取token
export function getToken() {
  return sessionStorage.getItem("token")
}