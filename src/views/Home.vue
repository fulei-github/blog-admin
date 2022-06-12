<template>
  <div class="home">

    <f-title content="项目介绍"></f-title>
    <div class="clock">
      <div>
        <el-alert :title="info" type="info" :closable="false">
        </el-alert>
      </div>
      <f-clock></f-clock>
    </div>

    <f-title content="搭建历程"></f-title>
    <div class="timeline">
      <el-timeline>

        <el-timeline-item timestamp="2020/5/12" placement="top">
          <el-card>
            <h4>创建项目 搭建框架</h4>
            <p>付磊 创建于 2020/5/12 13:46</p>
          </el-card>
        </el-timeline-item>

        <el-timeline-item timestamp="2020/5/12" placement="top">
          <el-card>
            <h4>新增 f-title 组件</h4>
            <p>付磊 提交于 2020/5/12 14:20</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/5/12" placement="top">
          <el-card>
            <h4>新增 f-pagination 组件</h4>
            <p>付磊 提交于 2020/5/12 15:20</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <f-title content="轮播图"></f-title>
    <div class="carousel m-20">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img :src="item.url" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {

      info: "从头created项目，一方面学习从0到1配置项目，另一方面大量运用全局样式以及变量更改主题，学习封装组件以及一些常用函数封装，方便后续工作开发和学习。",
      imgList: [
        {
          id: 1,
          url: "https://fakeimg.pl/300x200/?retina=1&text=欢&font=noto"
        },
        {
          id: 2,
          url: "https://fakeimg.pl/300x200/?retina=1&text=迎&font=noto"
        },
        {
          id: 3,
          url: "https://fakeimg.pl/300x200/?retina=1&text=你&font=noto"
        }
      ]
    }
  },

  created() {

  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.home {
  ::v-deep .el-alert__title {
    font-size: 16px;
  }
  .clock {
    display: flex;
    justify-content: space-between;
    margin-right: 150px;
    ::v-deep .el-alert--info.is-light {
      width: 80%;
    }
  }
  .carousel {
    width: 600px;
    height: 300px;
    margin: 0 auto;
    .img {
      height: 100%;
      width: 100%;
      vertical-align: middle;
      object-fit: contain;
    }
  }
}
</style>
