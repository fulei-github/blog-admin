/*
 * @Description: 单位路由
 * @Date: 2022-04-30 12:44:45
 * @Version: 0.1
 * @Autor: cjz
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-16 11:57:28
 */

import Layout from "@/layout/index.vue"

export default [
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    children: [
      {
        path: "/index",
        meta: {
          title: "欢迎您",
          menuItem: "/index"
        },
        component: () =>
          import(/* webpackChunkName: "publicModule" */ "@/views/Home.vue")
      }
    ]
  },
  {
    path: "/login",
    meta: {
      title: "登录"
    },
    component: () =>
      import(/* webpackChunkName: "publicModule" */ "@/views/login-module")
  },
  {
    path: "*",
    name: "not-found",
    component: () =>
      import(/* webpackChunkName: "notFoundModule" */ "@/views/default.vue")
  }
]
