<template>
  <div class="main">
    <!-- 上部分内容区 -->
    <el-row :gutter="6">
      <!-- 左侧分类区域 -->
      <el-col :span="6">
        <Category />
      </el-col>
      <!-- 中部轮播图 -->
      <el-col :span="12">
        <Carousel />
      </el-col>
      <!-- 右侧公告区域 -->
      <el-col :span="6">
        <Notice />
      </el-col>
    </el-row>
    <el-divider content-position="center">热门二手</el-divider>
    <!-- 商品列表展示区域 -->
    <div class="goods-list">
      <GoodsList />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Category from '@/pages/Home/Category'
import Carousel from '@/pages/Home/Carousel'
import Notice from '@/pages/Home/Notice'
import GoodsList from '@/pages/Home/GoodsList'

export default {
  name: '',
  components: {
    Category,
    Carousel,
    Notice,
    GoodsList
  },
  computed: {
    ...mapState({
      testMsg: state => state.home.testMsg
    })
  },
  created() {
    this.$store.dispatch('home/test')
  }
}
</script>

<style lang="less" scoped>
.main {
  height: auto;
  .el-row {
    margin-bottom: 20px;
    height: 450px;
    // margin-top: 30px;
    // display: flex;
    /*定义子级元素垂直居中*/
    // align-items: center;
    overflow: hidden;
    &:last-child {
      margin-bottom: 0;
    }
    .el-col {
      border-radius: 4px;
      height: 450px;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
  }
  // .el-row:first-of-type {
  //   margin-top: 0px;
  // }
  .el-divider__text {
    letter-spacing: 15px;
    line-height: 16px;
    background-color: rgba(1, 1, 1, 0);
  }
}
</style>
