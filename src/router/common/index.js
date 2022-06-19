/*
 * @Description: 路由
 * @Date: 2022-06-16 12:39:28
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-19 13:41:34
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
          title: "首页"
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
