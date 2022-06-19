<!--
 * @Description: 分页
 * @Autor: fulei
 * @Date: 2020-05-07 23:22:51
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-19 12:52:01
 -->
<template>
  <div>
    <el-menu :default-active='theChoosen' :unique-opened="true" router class="el-menu-vertical-demo">
      <el-submenu v-for="item in data" :index="item.id" :key="item.id">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <template v-for="subItem in item.children">
          <el-submenu v-if="subItem.children" :key="subItem.id" :index="subItem.id">
            <template slot="title">{{subItem.name}}</template>
            <el-menu-item :index="childItem.to" v-for="childItem in subItem.children" :key="childItem.id" :route="{path:childItem.to}">
              <el-tooltip class="item" effect="light" :content="childItem.name" placement="right" v-if="childItem.name.length>10">
                <span :class="['one-line-hidden','text-over']"> {{childItem.name}}</span>
              </el-tooltip>
              <span v-else :class="['item-text']"> {{childItem.name}}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="subItem.to" :key="subItem.id" :route="{path:subItem.to}">
            <el-tooltip class="item" effect="light" :content="subItem.name" placement="right" v-if="subItem.name.length>10">
              <span :class="['item-text','text-over']"> {{subItem.name}}</span>
            </el-tooltip>
            <span v-else :class="['item-text']"> {{subItem.name}}</span>
          </el-menu-item>
        </template>
      </el-submenu>
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
::v-deep .el-submenu.is-active > .el-submenu__title {
  color: $main-color;
}

::v-deep .el-submenu.is-active {
  // background-color: $blue_color;
}

::v-deep .el-submenu.is-active.is-opened {
  background-color: #fff;
}

.el-menu-item.is-active {
  background-color: $main_color_15;
  border-right: 2px solid $blue_color;
}

.el-menu-item {
  padding: 0 48px !important;
}
.item-text {
  display: inline-block;
  width: 100%;
}

.text-over {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>