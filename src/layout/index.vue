<!--
 * @Description: layout布局
 * @Date: 2022-06-12 21:14:33
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-19 14:22:24
-->
 <template>
  <div class="container">
    <top-nav />
    <div class="menu-box" :style="menuStyle">
      <div class="imgs">
        <img v-if="!show" :src="require('@pic/index/shrink@2x.png')" alt="shrink" @click="controlMenu">
        <img v-else :src="require('@pic/index/open@2x.png')" alt="open" @click="controlMenu">
      </div>
      <f-menu :theChoosen='$route.meta.menuItem' :showIcon="show" />
    </div>
    <div class="container-content" :style="layoutStyle">
      <div class="layout-box">
        layout-box
      </div>
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
      route: null,
      show: false //控制侧边栏
    }
  },
  computed: {
    menuStyle() {
      const width = this.show ? 70 : 210
      return {
        width: width + "px"
      }
    },
    layoutStyle() {
      const width = this.show ? 70 : 210
      return {
        marginLeft: width + "px"
      }
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
  created() {

  },

  methods: {
    controlMenu() {
      this.show = !this.show
    }
  }
}
 </script>
 
 <style lang="scss" scoped>
@import "@/styles/variables.scss";
.menu-box {
  position: fixed;
  top: 70px;
  left: 0;
  overflow: hidden;
  // width: 210px;
  transition: 0.3s;
  height: 100vh;
  background-color: $main_bg_color;
  .imgs {
    position: absolute;
    top: 370px;
    right: 0;
    cursor: pointer;
    width: 40px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.container {
  padding-top: 70px;
  .container-content {
    height: 100vh;
    // margin-left: 210px;
    .layout-box {
    }
  }
}
// .container {
//   background-color: #f6f6f8;
//   display: flex;
//   ::v-deep .el-card {
//     // height: 100%;
//     border-radius: 10px;
//   }
//   .container-menu {
//     width: 300px;
//     min-height: 900px;
//     margin: 10px;
//   }
//   .container-content {
//     position: relative;
//     margin: 10px;
//     flex: 1;
//     .container-wrapper {
//       // margin-top: 100px;
//     }
//   }
// }
</style>