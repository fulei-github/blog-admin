/*
 * @Description: vuex登录设置
 * @Date: 2022-06-16 11:37:35
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-16 11:37:38
 */

import { getToken, getUser } from "@/utils/auth"

const state = {
  token: getToken(),
  user: getUser()
}
const mutations = {
}
const actions = {
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
