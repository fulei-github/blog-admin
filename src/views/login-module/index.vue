<!--
 * @Description: 登录页面
 * @Date: 2022-06-13 10:52:07
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-16 11:48:00
-->
<template>
  <div class="login-box">
    <h3>博客后台管理系统</h3>
    <div class="login-form">
      <div class="left">
        <img src="@/assets/imgs/login-left3.png" alt="">
      </div>
      <div class="right">
        <h4>欢迎{{isLogin ? "登录" : "注册"}}</h4>
        <el-form ref="form" :model="form" :rules="rules" class="login-form-box">
          <!-- 登录模块 -->
          <template v-if="isLogin">
            <el-form-item prop="username">
              <el-input v-model.trim="form.username" placeholder="请输入账号">
                <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model.trim="form.password" placeholder="请输入密码" show-password @keyup.enter.native="handleSubmit('0')">
                <i slot="prefix" class="el-input__icon el-icon-s-goods"></i>
              </el-input>
            </el-form-item>
          </template>
          <!-- 注册模块 -->
          <template v-else>
            <el-form-item prop="username1">
              <el-input v-model.trim="form.username1" placeholder="请输入账号">
                <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password1">
              <el-input v-model.trim="form.password1" placeholder="请输入密码" show-password>
                <i slot="prefix" class="el-input__icon el-icon-s-goods"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password2">
              <el-input v-model.trim="form.password2" placeholder="请再次输入密码" @keyup.enter.native="handleSubmit('1')" show-password>
                <i slot="prefix" class="el-input__icon el-icon-s-goods"></i>
              </el-input>
            </el-form-item>
          </template>
        </el-form>
        <el-button v-if="isLogin" type="primary" @click.native.prevent="handleSubmit('0')">登录</el-button>
        <el-button v-else type="primary" @click="handleSubmit('1')">注册</el-button>
        <div class="t-a-c" style="width:100%">
          <el-link v-if="isLogin" type="info" @click="handleClick">没有账号？点此去注册</el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    const validatePassword2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"))
      } else if (value !== this.form.password1) {
        callback(new Error("两次输入密码不一致!"))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: "",
        password: "",
        username1: "",
        password1: "",
        password2: ""
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        username1: [{ required: true, validator: this.validateUserNameFn, trigger: "blur" }],
        password1: [{ required: true, validator: this.validatePassWordFn, trigger: "blur" }],
        password2: [{ required: true, validator: validatePassword2, trigger: "blur" }]
      },
      title: "欢迎登录",
      isLogin: true
    }
  },

  mounted() {

  },

  methods: {
    async handleSubmit(key) {
      await this.$refs.form.validate()
      try {
        switch (key) {
          case "0":
            this.handleLogin()
            break
          case "1":
            this.handleReg()
            break
        }
      } catch (error) {
        console.dir(error)
      }
    },
    //登录的api
    handleLogin() {
      const params = {
        username: this.form.username,
        password: this.form.password
      }
      //模拟登录
      this.$sessionUtil.setItem("token", "70e49704-343b-4c3c-852b-83e27f18aae4")
      this.$sessionUtil.setItem("user", params)
      setTimeout(() => {
        this.$router.push("/")
      }, 500)
    },
    //注册的api
    handleReg() {
      const params = {
        username: this.form.username1,
        password: this.form.password1
      }
      console.log("注册的入参", params)
      this.isLogin = !this.isLogin
    },
    handleClick() {
      this.form = {}
      this.isLogin = !this.isLogin
    },
    onSubmit() {
      console.log(this.form.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-button {
  width: 100%;
  margin-bottom: 30px;
  font-size: 20px;
}
.login-box {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/imgs/login-bg2.png");
  background-repeat: no-repeat;
  background-size: cover;
  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    margin-left: -500px;
    margin-top: -240px;
    width: 1200px;
    height: 480px;
    background-color: #fff;
    border-radius: 10px;
    .right {
      width: 600px;
      padding: 55px 120px 55px 70px;
      .el-input__icon {
        font-size: 20px;
      }
      .el-button--primary {
        background-color: #1b65b9;
        margin-top: 10px;
      }
      .el-button--primary:focus,
      .el-button--primary:hover {
        background: #4984c7;
        border-color: #4984c7;
        color: #fff;
      }
      .login-form-box {
        margin-top: 38px;
      }

      ::v-deep .el-input__inner {
        width: 100%;
        height: 50px;
        font-size: 18px;
        padding-left: 50px;
        // border: none;
      }
      h4 {
        font-size: 26px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #3d3b3b;
        line-height: 37px;
      }
    }
    .left {
      width: 600px;
      height: 100%;
      img {
        width: 600px;
        height: 100%;
      }
    }
  }
  h3 {
    position: absolute;
    left: 190px;
    font-size: 36px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: white;
    line-height: 40px;
  }
}
</style>