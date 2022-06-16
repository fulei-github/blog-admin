<!--
 * @Description: 顶部导航栏
 * @Date: 2022-06-12 21:57:11
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-16 12:09:48
-->
<template>
  <el-card shadow="hover" style="margin-bottom:14px" class="postive">
    <div class="top_nav">
      <div>
        <h2>博客后台管理系统</h2>
      </div>
      <div class="wrapper">
        <el-avatar :size="50" :src="src"></el-avatar>
        <!-- <div>
          <img src="../assets/logo.png" alt="">
        </div> -->
        <div class="dropdown_box">
          <el-dropdown>
            <span class="el-dropdown-link">
              admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <router-link to="/">
                <el-dropdown-item>首页</el-dropdown-item>
              </router-link>
              <a target="_blank" href="https://github.com/fulei-github/blog-admin">
                <el-dropdown-item>项目地址</el-dropdown-item>
              </a>
              <el-dropdown-item divided @click.native="handleClick(2)">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {

  data() {
    return {
      src: require("../assets/logo.png")
    }
  },

  mounted() {

  },

  methods: {
    async handleClick(key) {
      try {
        await this.$confirm("亲,确定退出吗?", "提示")
        this.$sessionUtil.clear()
        this.$router.replace("/login")
      } catch (error) {
        console.log("点击取消按钮")
      }

      // this.$router.push("/login")

    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
::v-deep .el-card__body {
  padding: 0;
}
.postive {
  // position: fixed;
  // top: 10px;
  // width: 82%;
  // z-index: 1000;
}
.top_nav {
  // margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    margin: 0;
  }
  .wrapper {
    display: flex;
    align-items: center;
    .dropdown_box {
      // width: ;
      margin-left: 14px;
    }
  }
}
</style>