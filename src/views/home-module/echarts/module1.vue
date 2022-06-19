<!--
 * @Description: 
 * @Date: 2022-06-19 15:10:36
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-19 15:55:46
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
          data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
        },
        yAxis: {
          type: "value"
        },
        tooltip: {
          trigger: "item"
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130, 70, 110, 130, 50, 50],
            type: "bar"
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
