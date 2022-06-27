<!--
 * @Description: 入口页
 * @Date: 2022-06-27 20:35:47
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-27 20:52:55
-->
<template>
  <div ref="vantaRef" class="box">
    Foreground content here
  </div>
</template>
 
<script>
import * as THREE from "three"
import waves from "vanta/src/vanta.waves"
export default {
  mounted() {
    this.vantaEffect = waves({
      el: this.$refs.vantaRef,
      THREE: THREE
    })
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
}
</style>