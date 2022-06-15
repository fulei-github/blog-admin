/*
 * @Description: 
 * @Date: 2022-06-02 16:01:12
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-02 16:25:13
 */

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context("./svg", false, /.svg$/)
requireAll(req)