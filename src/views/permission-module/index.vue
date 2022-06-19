<!--
 * @Description: 权限管理
 * @Date: 2022-06-19 17:32:28
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-19 18:51:15
-->
<template>
  <div class="set-enterpise">
    <div class="container-box">
      <div class="left-box">
        <el-card>
          <div>
            <ul class="tabs">
              <li :v-model="active" :class="active == i ? 'active' : ''" v-for="(item,i) in tabs" :key="i" @click="handlerClick(i)">{{item}}</li>
            </ul>
          </div>
        </el-card>
      </div>
      <div class="right-box">
        <el-card>
          <div>
            <roles-setting v-if="active === 0" />
            <!-- <Departments v-if="active === 0"></Departments>
            <RolesSetting v-if="active === 1"></RolesSetting>
            <JobSetting v-if="active === 2"> </JobSetting>
            <UserSetting v-if="active === 3"></UserSetting> -->
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import RolesSetting from "./components/role-mange/index.vue"
// import Departments from "./components/departments/index.vue"
// import JobSetting from "./components/job-setting/index.vue"
// import UserSetting from "./components/user-setting/index.vue"
export default {
  components: {
    RolesSetting
    // Departments,
    // JobSetting,
    // UserSetting
  },
  data() {
    return {
      tabs: ["角色管理", "用户架构", "职务管理", "用户管理"], // tab列表
      active: 0 //当前选中
    }
  },

  mounted() {

  },

  methods: {
    handlerClick(i) { //tab切换
      this.active = i
    }
  }
}
</script>

<style lang="scss" scoped>
.set-enterpise {
  padding: 10px 20px;
  .container-box {
    display: flex;
    .left-box {
      margin-right: 20px;
      .tabs {
        min-height: 800px;
        li {
          width: 200px;
          height: 52px;
          text-align: center;
          line-height: 52px;
          cursor: pointer;
        }
        .active {
          background: #ebf1fd;
          color: #2a79ee;
        }
      }
    }
    .right-box {
      width: calc(100% - 284px);
    }
  }
}
</style>