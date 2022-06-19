<!--
 * @Description: 首页
 * @Date: 2022-06-12 21:14:33
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-19 16:06:43
-->
<template>
  <div class="home_box">
    <!-- 头部块 -->
    <el-card>
      <div class="index-title">
        <div class="left-block">
          <div class="icon"></div>
          <div class="title">
            <div class="t1">你好，admin,欢迎您登录后台管理系统！</div>
            <div> phone : 130xxxxxxxx</div>
          </div>
        </div>
        <div class="right-block">
          <div v-for="(item,index) in titltList" :key="index">
            <div>{{item.title}}</div>
            <div class="t2">
              <span>{{item.number}}</span>篇
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <!-- echarts -->
    <el-card class="contain-card">
      <div class="index-echarts">
        <div>
          <f-title content="累计发布文章" pleft="10" fontContSize="18" lineWidth="4" lineHeight="18" lineTop="11" />
          <module1 />
        </div>
        <div style="margin-left: 300px;">
          <f-title content="上周发布文章" pleft="10" fontContSize="18" lineWidth="4" lineHeight="18" lineTop="11" />
          <module2 />
        </div>
      </div>
    </el-card>
    <!-- 动态 -->
    <el-card class="contain-card">
      <f-title content="动态" pleft="10" fontContSize="18" lineWidth="4" lineHeight="18" lineTop="11" />
      <div class="recruit-area">
        <div class="calendar-area">
          <el-calendar v-model="calendarValue"></el-calendar>
        </div>
        <div class="contain-area">
          <div v-if="recruitData.length === 0" class="empty">今日暂无动态</div>
          <template v-else>
            <div v-for="(item, index) in recruitData" :key="index" class="contain-item">
              <div class="icon"></div>
              <div class="contain">
                <div>
                  <span class="cr-active">admin</span>
                  <span>发布了</span>
                  <span class="cr-active">JavaScript从入门到放弃</span>
                </div>
                <div>2022-06-19 14:26:04</div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import module1 from "./home-module/echarts/module1.vue"
import module2 from "./home-module/echarts/module2.vue"
export default {
  components: {
    module1,
    module2
  },
  data() {
    return {
      titltList: [
        {
          title: "累计发布文章",
          number: "50"
        },
        {
          title: "上周发布文章",
          number: "10"
        },
        {
          title: "文章累计点赞数",
          number: "852"
        }
      ],
      calendarValue: new Date(),
      recruitData: [{}, {}, {}, {}, {}, {}, {}, {}]
    }
  },

  created() {

  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.home_box {
  width: 100%;
  color: #1a3a5c;
  padding-bottom: 20px;
  ::v-deep .el-card__body {
    padding: 24px;
  }
  .contain-card {
    margin-top: 20px;
    ::v-deep .el-card__body {
      padding-top: 10px;
    }
  }
  .index-title {
    height: 72px;
    display: flex;
    justify-content: space-between;
    .left-block {
      flex: 1;
      display: flex;
      .icon {
        width: 72px;
        height: 72px;
        margin-right: 24px;
        border-radius: 36px;
        background-color: aqua;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .title {
        div {
          line-height: 36px;
        }
        .t1 {
          font-size: 24px;
          font-weight: bold;
        }
      }
    }
    .right-block {
      flex: 1;
      display: flex;
      font-size: 14px;
      div {
        flex: 1;
        line-height: 36px;
      }
      .t2 {
        color: #2a79ee;
        span {
          font-size: 30px;
          font-weight: bold;
        }
      }
    }
  }
  .index-echarts {
    display: flex;
    flex-wrap: wrap;
  }
  .recruit-area {
    width: 100%;
    height: 300px;
    display: flex;
    .calendar-area {
      width: 360px;
      ::v-deep .el-calendar-table .el-calendar-day {
        height: 35px;
      }
      ::v-deep .el-calendar-table tr td:first-child {
        border-left: none;
      }
      ::v-deep .el-calendar-table tr:first-child td {
        border-top: none;
      }
      ::v-deep .el-calendar-table td {
        border: none;
      }
      ::v-deep .el-calendar-table .el-calendar-day {
        text-align: center;
      }
    }
    .contain-area {
      flex: 2;
      margin-left: 20px;
      padding: 0 20px;
      overflow-y: scroll;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      .contain-item {
        padding: 20px 0;
        display: flex;
        border-bottom: 1px solid #eeeeee;
        .icon {
          width: 54px;
          height: 54px;
          margin-right: 20px;
          border-radius: 27px;
          background-color: aquamarine;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .contain {
          div {
            line-height: 27px;
          }
          .cr-active {
            padding: 0 4px;
            color: #2878ff;
            font-weight: bold;
          }
        }
      }
      .empty {
        color: #1a3a5c;
        text-align: center;
        line-height: 300px;
      }
    }
  }
}
</style>
