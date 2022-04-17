<template>
  <div>
    <div class="flexContainer">
      <div class="flexItem" v-for="(o, index) in 28" :key="o" :offset="index" @click="toGoodsInfo">
        <el-card :body-style="body" shadow="hover">
          <img src="@/assets/logo.png" />
          <span>标题 标题 标题 标题 标题</span>
          <span publisher>发布者: sxt</span>
        </el-card>
      </div>
    </div>
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage2"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="sizes, prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      body: {
        padding: '0px'
      }
    }
  },
  methods: {
    toGoodsInfo() {
      this.$router.push('goodsInfo')
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="less" scoped>
.flexContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  align-content: space-between;
  justify-content: space-between;
  align-items: center;
  .flexItem {
    width: 250px;
    height: 300px;
    margin: 15px;
    text-align: center;
    .el-card {
      width: 100%;
      height: 100%;
      overflow: hidden;
      img {
        width: 80%;
        margin: 0 auto;
        display: block;
      }
      span {
        display: block;
        line-height: 100%;
        margin-top: 30px;
      }
      span[publisher] {
        font-size: 12px;
      }
    }
  }
}
// .page {
// }
</style>