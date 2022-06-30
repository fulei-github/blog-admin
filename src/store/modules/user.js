/*
 * @Description: vuex登录设置
 * @Date: 2022-06-16 11:37:35
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-30 21:58:44
 */

import { getToken, getUser, setTokenInLocal } from "@/utils/auth"
import { loginApi } from "@/api/user/index"
import Vue from "vue"

const state = {
  token: getToken() || null,
  user: getUser()
}
const mutations = {
  // 设置token
  setToken(state, token) {
    state.token = token // 设置token
    setTokenInLocal(token)
  }
}
const actions = {
  async getTokenAction(ctx, data) {
    const res = await loginApi(data)
    Vue.prototype.$message.success(res.msg)
    ctx.commit("setToken", res.data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
