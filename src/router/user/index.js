/*
 * @Description: 路由
 * @Date: 2022-06-16 12:39:28
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-19 13:42:15
 */

import Layout from "@/layout/index.vue"

export default [
  {
    path: "/user",
    component: Layout,
    redirect: "/user-info",
    children: [
      {
        path: "/user-info",
        meta: {
          title: "账号设置"
        },
        component: () =>
          import(/* webpackChunkName: "publicModule" */ "@/views/user-module")
      }
    ]
  }
]
