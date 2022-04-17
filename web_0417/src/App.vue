<template>
  <el-container>
    <!-- 头部 -->
    <el-header height="100px">
      <Header />
    </el-header>

    <!-- 主体内容 -->
    <el-main>
      <router-view></router-view>
    </el-main>

    <!-- 页脚 -->
    <el-footer v-show="$route.meta.showFooter" height="80px">
      <Footer />
    </el-footer>

    <el-backtop />
  </el-container>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: '',
  components: {
    Header,
    Footer
  },
  computed: {},
  created() {
    console.log(this)
  }
}
</script>

<style lang="less">
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 80px;
}

.el-header {
  background-color: #4a97fd;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  // line-height: 160px;
}
#nprogress .bar {
  background: rgb(223, 238, 16) !important;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
}
</style>
