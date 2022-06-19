/*
 * @Description: 权限管理
 * @Date: 2022-06-16 12:39:28
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-19 17:38:45
 */

import Layout from "@/layout/index.vue"

export default [
  {
    path: "/permission",
    component: Layout,
    redirect: "/permission-manage",
    children: [
      {
        path: "/permission-manage",
        meta: {
          title: "权限管理"
        },
        component: () =>
          import(/* webpackChunkName: "permissionModule" */ "@/views/permission-module")
      }
    ]
  }
]
