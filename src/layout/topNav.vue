<!--
 * @Description: 顶部导航栏
 * @Date: 2022-06-12 21:57:11
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-24 14:16:46
-->
<template>

  <div class="top_nav">
    <div>
      <h4>博客后台管理系统</h4>
    </div>
    <div class="wrapper">
      <el-avatar :size="50" :src="src"></el-avatar>
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
::v-deep .el-dropdown-link {
  color: #fff;
}
.top_nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  height: 70px;
  display: flex;
  align-items: center;
  line-height: 70px;
  justify-content: space-between;
  background-image: url("../assets/imgs/index/bg@2x.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 10;
  h4 {
    margin: 0;
    margin-left: 40px;
    color: #fff;
  }
  .wrapper {
    margin-right: 40px;
    display: flex;
    align-items: center;
    .dropdown_box {
      margin-left: 14px;
    }
  }
}
</style>