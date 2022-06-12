/*
 * @Description: 设置浏览器title
 * @Autor: guoruliang
 * @Date: 2020-03-23 17:02:15
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-12 21:20:06
 */
export function setTitle(title) {
  document.title = title
  document.head.querySelector("title").innerText = title
}
//导出随机数
export function random(n, m) {
  var tmp = m - n + 1
  return Math.floor(Math.random() * tmp + n)
}
