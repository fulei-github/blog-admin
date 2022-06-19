<!--
 * @Description: 分页
 * @Autor: fulei
 * @Date: 2020-05-07 23:22:51
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-19 14:31:09
 -->
<template>
  <div>
    <el-menu default-active='0' :unique-opened="true" router class="el-menu-vertical-demo">
      <el-menu-item v-for="item in data" :index="item.id" :key="item.id" :route="{path:item.to}">
        <i :class="item.icon"></i>
        <span v-if="!showIcon" slot="title">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import data from "./data.json"
// 取消响应式
const theDate = Object.freeze(data)
export default {
  name: "f-menu",
  props: {
    // 当前选中菜单项index
    theChoosen: {
      type: String
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: []
    }
  },

  mounted() {
    this.data = theDate.menuList
  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.el-menu-item {
  background-color: $main_bg_color;
}
.el-menu-item.is-active {
  background-color: $main_color_15;
  border-right: 3px solid $blue_color;
}
</style>