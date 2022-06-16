<!--
 * @Description: layout布局
 * @Date: 2022-06-12 21:14:33
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-16 12:00:34
-->
 <template>
  <div class="container">
    <!-- 左侧菜单 -->
    <div class="container-menu">
      <el-card shadow="hover" style="height:100%">
        <f-menu :theChoosen='$route.meta.menuItem' />
      </el-card>
    </div>
    <!-- 页面主体 -->

    <div class="container-content">
      <top-nav />
      <el-card shadow="hover" class="container-wrapper">
        <router-view />
      </el-card>
    </div>
  </div>
</template>
 
 <script>
import topNav from "./topNav.vue"
export default {
  components: {
    topNav
  },
  name: "layout",
  data() {
    return {
      route: null
    }
  },
  watch: {
    $route: {
      handler(to) {
        // console.log("to", to)
        this.route = to

      },
      deep: true,
      immediate: true
    }
  },
  mounted() {

  },

  methods: {

  }
}
 </script>
 
 <style lang="scss" scoped>
@import "@/styles/variables.scss";
.container {
  background-color: #f6f6f8;
  display: flex;
  ::v-deep .el-card {
    // height: 100%;
    border-radius: 10px;
  }
  .container-menu {
    width: 300px;
    min-height: 900px;
    margin: 10px;
  }
  .container-content {
    position: relative;
    margin: 10px;
    flex: 1;
    .container-wrapper {
      // margin-top: 100px;
    }
  }
}
</style>