<!--
 * @Description: 角色管理
 * @Date: 2022-06-24 13:16:42
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-24 15:10:43
-->
<template>
  <div>
    <!-- 表单 -->
    <transition :duration="700" enter-active-class="animate__zoomInLeft" leave-active-class="animate__zoomOut">
      <div v-show="showFormArea" class="animate__animated">
        <f-title content="搜索条件" border>
          <template #right-area>
            <el-button size="small" icon="el-icon-refresh" @click="reset">重 置</el-button>
            <el-button type="primary" icon="el-icon-search" size="small" @click="queryInfo">搜 索</el-button>
          </template>
        </f-title>
        <el-form ref="form" :model="form" label-width="70px" size="small">
          <el-row>
            <el-col :span="6">
              <el-form-item label="角色名称">
                <el-input v-model="form.roleName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="权限字符">
                <el-input v-model="form.string"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="创建时间">
                <el-date-picker v-model="form.createDate" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd" />
              </el-form-item>

            </el-col>
            <el-col :span="6">
              <el-form-item label="状态">
                <f-select v-model="form.state" dictType="state" style="width:100%" />
              </el-form-item>
            </el-col>
          </el-row>

        </el-form>
      </div>
    </transition>

    <f-title content="用户列表" border>
      <template #right-area>
        <el-tooltip class="item" effect="dark" :content="showFormArea ? '隐藏搜索' : '显示搜索'" placement="top-start">
          <el-button icon="el-icon-search" circle @click="showFormArea = !showFormArea"></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="刷新" placement="top-start">
          <el-button icon="el-icon-refresh" circle @click="queryInfo"></el-button>
        </el-tooltip>
        <el-button type="primary" size="small" icon="el-icon-plus" @click="addRole">添加角色</el-button>
      </template>
    </f-title>

    <el-table :data="tableData" border v-loading="loading">
      <el-table-column type="selection" align="center" width="55">
      </el-table-column>
      <el-table-column type="index" label="角色编号" align="center" width="200">
      </el-table-column>
      <el-table-column label="角色名称" prop="roleName" align="center"></el-table-column>
      <el-table-column prop="string" label="权限字符" align="center"></el-table-column>
      <el-table-column prop="state" label="状态" align="center">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.state" active-color="#13ce66" inactive-color="#ff4949" disabled>
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="roleDesc" label="权限描述" align="center"></el-table-column>
      <el-table-column prop="createDate" label="创建时间" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编 辑</el-button>
          <el-button type="danger" size="mini" @click="handleDelte(scope.row)">删 除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <f-pagination :total="100" @pagination="pagination" />
    <edit-dialog :showDialog="showDialog" :type="type" :formData="sonForm" @close="showDialog = false" />
  </div>
</template>

<script>
import EditDialog from "./edit.vue"
export default {
  components: {
    EditDialog
  },
  data() {
    return {
      tableData: [],
      form: {},
      loading: false,
      showFormArea: true,
      showDialog: false,
      sonForm: {},
      type: ""
    }
  },

  created() {
    this.getList()
  },

  methods: {
    //重置表单
    reset() {
      this.form = {}
    },
    //搜索按钮
    queryInfo() {
      console.log(this.form)
      this.getList()
    },
    //分页组件
    pagination(val) {
      this.getList()
      console.log(val)
    },
    //模拟数据
    getList() {
      this.loading = true
      const timers = setTimeout(() => {
        this.tableData = [
          {
            roleName: "admin",
            string: "admin",
            state: "1",
            createDate: "20220606",
            roleDesc: "admin最高管理员，用于所有权限"
          },
          {
            roleName: "user-1",
            string: "mange",
            state: "1",
            createDate: "20220620",
            roleDesc: "网站管理员拥有除admin外的所有权限"
          },
          {
            roleName: "user-2",
            string: "user",
            state: "0",
            createDate: "20220620",
            roleDesc: "普通用户，仅可发布文章以及增删改查自己的文章"
          }
        ]
        this.loading = false
        clearTimeout(timers)
      }, 500)
    },
    //编辑操作
    handleEdit(row) {
      this.type = "edit"
      this.showDialog = true
      this.sonForm = row
    },
    //新增角色
    addRole() {
      this.type = "add"
      this.showDialog = true
    },
    //删除按钮
    handleDelte(row) {
      this.$confirm(`您确定删除 ${row.roleName}? 角色吗？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$message({
          type: "success",
          message: "删除成功!"
        })
      }).catch(() => {
        this.$message({
          type: "info",
          message: "已取消删除"
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>