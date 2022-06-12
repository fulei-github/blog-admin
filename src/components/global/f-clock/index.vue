<template>
  <div>
    <clock :time="time"></clock>
  </div>
</template>

<script>
import Clock from "vue-clock2"
export default {
  name: "f-clock",
  components: { Clock },

  data() {
    return {
      time: "",
      num: "",
      timer: null
    }
  },
  watch: {
    num: {
      immediate: true, // 立即执行
      deep: true, // 深度监听复杂类型内变化
      handler(newVal, oldVal) {
        var nowdate = new Date()
        const h = nowdate.getHours()
        const m = nowdate.getMinutes()
        const s = nowdate.getSeconds()
        this.time = h + ":" + m + ":" + s
      }
    }
  },
  destroyed() {
    window.clearInterval(this.timer)
  },
  created() {
    var nowdate = new Date()
    this.num = nowdate.getSeconds()
    this.forverFunc()
  },
  methods: {
    forverFunc() {
      this.timer = setTimeout(() => {
        this.num++
        this.forverFunc()
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>