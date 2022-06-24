<!--
 * @Description: 分页
 * @Autor: fulei
 * @Date: 2020-05-07 23:22:51
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-24 14:27:10
 -->
<template>
  <div>
    <el-menu :default-active='index' :unique-opened="true" router class="el-menu-vertical-demo">
      <!-- <el-menu-item v-for="item in data" :index="item.id" :key="item.id" :route="{path:item.to}"> -->
      <el-menu-item v-for="item in data" :index="item.index" :key="item.id" :route="item.index">
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
      data: [],
      index: ""
    }
  },
  watch: {
    $route: {
      handler(to) {
        this.index = to.fullPath
      },
      deep: true,
      immediate: true
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