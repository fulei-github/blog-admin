<!--
 * @Description: 首页
 * @Date: 2022-06-12 21:14:33
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-16 10:54:18
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    // sessionStorage.setItem(
    //   "token",
    //   "70e49704-343b-4c3c-852b-83e27f18aae4"
    // )
  }
}
</script>
<style lang="scss">
</style>
