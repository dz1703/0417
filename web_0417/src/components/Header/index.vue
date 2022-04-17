<template>
  <el-row :gutter="6">
    <el-col :span="8">
      <div class="grid-content bg-purple" @click="toHome">
        <span>校园二手交易平台</span>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple-light">
        <form>
          <el-input placeholder="请输入内容" v-model="keyword" clearable>
            <el-button type="primary" slot="append" @click="toSearch" icon="el-icon-search">搜索</el-button>
          </el-input>
        </form>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <router-link class="login" to="/login">点击登录</router-link>
      </div>
    </el-col>
  </el-row>
  <!-- <div>
    
    <router-link to="/home">头部</router-link>
    <router-link to="/login">点击登录</router-link>
    <router-link to="/register">点击注册</router-link>
    <form>
      <input type="text" v-model="keyword" />
      <el-button type="primary" @click="toSearch" icon="el-icon-search"
        >搜索</el-button
      >
    </form>
  </div>-->
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    toHome() {
      this.$router.push('home')
    },
    // 向search搜索路由进行跳转
    toSearch() {
      this.$router.push({
        name: 'search',
        query: {
          keyword: this.keyword || undefined
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  height: 100px;
  display: flex;
  /*定义子级元素垂直居中*/
  align-items: center;
  overflow: hidden;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
// .bg-purple {
//   // background: #ffffff;
// }
// .bg-purple-light {
//   // background: #ffffff;
// }
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  color: #ffffff;
  span {
    font-size: 26px;
    cursor: pointer;
  }
  .el-input {
    width: 90%;
    .el-button {
      background-color: rgb(219, 237, 243);
      span {
        font-size: 12px;
        color: #303133;
      }
    }
  }
  .login {
    color: #ffffff;
  }
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
