<!--
 * @Description: 角色设置
 * @Date: 2022-06-19 17:43:42
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-19 18:50:56
-->
<template>
  <div class="roles-box">
    <el-card>
      <div class="mb20">
        <el-button type="primary" size="small">+ 新增角色</el-button>
      </div>

      <!-- 表格区域 -->

      <el-table :data="tableData" border>
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column type="index" label="显示顺序" align="center" width="100"></el-table-column>
        <el-table-column prop="roleName" label="角色名称" align="center" width="200"></el-table-column>
        <el-table-column prop="string" label="权限字符" align="center" width="150"></el-table-column>
        <el-table-column prop="desc" label="角色描述" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="200">
          <template slot-scope="scope">
            <el-link type="primary">编辑</el-link>
            <el-link type="primary" class="ml10">分配权限</el-link>
            <el-link type="primary" class="ml10">删除</el-link>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

  </div>
</template>

<script>

export default {

  data() {
    return {

      tableData: [
        {
          roleName: "管理员", //角色名称
          string: "admin", //权限字符
          desc: "最高权限，拥有所有权限" //描述
        },
        {
          roleName: "次级管理员", //角色名称
          string: "mang", //权限字符
          desc: "权限低于admin，但是拥有增删改的权限" //描述
        },
        {
          roleName: "付磊", //角色名称
          string: "fulei", //权限字符
          desc: "普通用户，可以发表文章管理自己的门户内容，无分配权限的权限" //描述
        }
      ],
      show: false
    }
  },

  mounted() {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
.roles-box {
  min-height: 800px;
}
</style>