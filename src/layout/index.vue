 <template>
  <div class="container">
    <!-- 左侧菜单 -->
    <div class="container-menu">
      <el-card shadow="hover">
        <f-menu />
      </el-card>
    </div>
    <!-- 页面主体 -->
    <div class="container-content">
      <el-card shadow="hover">
        <router-view />
      </el-card>
    </div>
  </div>
</template>
 
 <script>
export default {
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
    height: 100%;
    border-radius: 10px;
  }
  .container-menu {
    width: 300px;
    min-height: 900px;
    margin: 30px;
  }
  .container-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 30px;
    margin-left: 0;
  }
}
</style>