<template>
  <div class="grid-content category-main">
    <el-divider content-position="center" />
    <div class="user-info">
      <img src="@/assets/logo.png" />
      <span>这是一个用户名</span>
      <el-button type="text">退出登录</el-button>
    </div>
    <el-divider content-position="center" />
    <ul class="infinite-list" v-infinite-scroll="load">
      <li v-for="(i, index) in count" :key="index" @click="toAnnounce">{{ i }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 20
    }
  },
  methods: {
    load() {
      this.count += 2
    },
    toAnnounce() {
      this.$router.push('announce')
    }
  }
}
</script>

<style lang="less" scoped>
.category-main {
  background-color: #fff;
  .el-divider:first-of-type {
    margin-top: 0;
  }
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.user-info:before,
.user-info:after {
  display: table;
  content: '';
}
.user-info:after {
  clear: both;
}
.user-info {
  width: 100%;
  text-align: left;
  img {
    width: 10%;
    margin-left: 30px;
    // float: left;
  }
  span {
    margin-left: 20px;
    vertical-align: middle;
  }
  .el-button {
    float: right;
    margin-right: 30px;
  }
}

.box-card {
  width: 100%;
  line-height: 30px;
}
.infinite-list {
  width: 100%;
  height: 360px;
  overflow: auto;
  // height: 100%;
  li {
    height: 50px;
    cursor: pointer;
  }
}
</style>