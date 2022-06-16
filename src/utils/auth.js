/*
 * @Description: 登陆相关
 * @Date: 2022-06-15 22:38:40
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-16 11:39:36
 */

// 获取token
export function getToken() {
  return sessionStorage.getItem("token")
}

// 获取用户信息
export function getUser() {
  if (
    sessionStorage.getItem("user") === null ||
    sessionStorage.getItem("user") === ""
  ) {
    return null
  } else {
    return JSON.parse(sessionStorage.getItem("user"))
  }
}