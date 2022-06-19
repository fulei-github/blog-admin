<!--
 * @Description: 
 * @Date: 2022-06-19 15:10:36
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-19 15:56:18
-->
<template>
  <div class="column-container">
    <div ref="monthWorkOrder" class="echarts-box" style="width: 600px; height: 300px; border: 1px solid #eee"></div>
  </div>
</template>

<script>
export default {
  name: "Column",
  data() {
    return {}
  },
  mounted() {
    this.initMonthWorkOrder()
  },
  methods: {
    // 月工单处理数
    initMonthWorkOrder() {
      const myChart = this.$echarts.init(this.$refs.monthWorkOrder)
      const option = {
        xAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        tooltip: {
          trigger: "item"
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 50],
            type: "line"
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.column-container {
  height: 100%;
}
</style>
