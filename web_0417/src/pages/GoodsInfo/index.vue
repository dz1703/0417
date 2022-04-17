<template>
  <div class="main">
    <!-- 上部分内容区 -->
    <el-row :gutter="12">

    <el-col :span="8">
      <div class="HeadLOGO" style="margin-right:0px">
        <img src="@/assets/logo.png" />
      </div>
    </el-col>

    <el-col :span="16">

      <el-col :span="8">
        <div class="grid-content bg-purple">
         <el-card :body-style="body" shadow="hover" style="margin-left:0px">
          <span style="font-size:24px">商品名称</span>
          <span price style="font-size:14px">商品价格: ￥xxx</span>
          <span browserInfo style="font-size:14px">xxx人想要  xxx人浏览过</span>
          <div style="height: 32px"></div>
        </el-card>
        </div>
      </el-col>

      <el-col :span="8">
        <div class="grid-content bg-purple">
         <el-card :body-style="body" shadow="hover">
          <span>发布自</span>
          <div class="head">
            <img src="@/assets/logo.png" alt="" style="vertical-align:middle"/><a style="margin-top:30px">用户test</a>
          </div>
          <div style="height: 20px"></div>
        </el-card>
        </div>
      </el-col>
      
    </el-col>


  </el-row>

  <div>
    <el-button type="primary" slot="append" @click="want" icon="el-icon-search" style="margin-right:40px">我想要</el-button>
    <el-button type="primary" slot="append" @click="toBuy" icon="el-icon-search" style="margin-right:40px">购 买</el-button>
    <el-button type="primary" slot="append" @click="attention" icon="el-icon-search" style="margin-right:40px">关 注</el-button>
  </div>

    <div style="height:10px"></div>

    <el-divider content-position="left">商品详情</el-divider>
    <!-- 商品详情 -->
    <div style="height:10px"></div>
    <div class="details" style="white-space:normal">
            Vue是一套用于构建用户界面的渐进式框架.与其它大型框架不同的是,Vue 被设计为可以自底向上逐层应用.Vue 的核心库只关注视图层,不仅易于上手,还便于与第三方库或既有项目整合.
            另一方面,当与现代化的工具链以及各种支持类库结合使用时,Vue 也完全能够为复杂的单页应用提供驱动.</div>
    <el-divider content-position="left">商品评价</el-divider>
    <!-- 商品评价 -->
    <div class="comments-list">
      <el-card :body-style="body" shadow="hover">
          <div class="head">
            <img src="@/assets/logo.png" alt="" style="vertical-align:left"/><a style="margin-right:30px">用户test</a><a style="margin-right:0px">发布于2022.XX.XX XX:XX:XX</a>
          </div>
          <div class="comment">testtesttesttesttesttesttesttest</div>
          <div style="height: 20px"></div>
      </el-card>
      <el-card :body-style="body" shadow="hover">
          <div class="head">
            <img src="@/assets/logo.png" alt="" style="vertical-align:left"/><a style="margin-right:30px">用户test</a><a style="margin-right:0px">发布于2022.XX.XX XX:XX:XX</a>
          </div>
          <div class="comment">testtesttesttesttesttesttesttest</div>
          <div style="height: 20px"></div>
      </el-card>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
.main{
  height: auto;
  margin-bottom: 20px;
  height: 700px;
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
      height: 200px;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #e9eef3;
    }
}

    .details{
      margin-left: 150px;
      margin-right: 100px;
      line-height: 30px;
    }
    .el-divider{
      // margin: 8px 0;
      // background: 0 0;

      //border-top: 20px solid #E6EBF5;
      margin-left: 100px;
      
    }
    .el-divider__text {
      position: absolute;
      background-color: #FFF;
      padding: 0 20px;
      font-weight: 500;
      color: #303133;
      font-size: 25px;
    }

    .el-card {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: #e9eef3;
      
      span {
        display: block;
        // font-weight: bold;
        // font-weight: 400;
        line-height: 100%;
        margin-top: 10px;
      }
      span[price] {
        font-size: 12px;
      }
      span[browserInfo] {
        font-size: 12px;
      }
      .head{
        width: 800px;
        height: 50px;
        text-align: left;
        margin-left: 150px;
        margin-bottom: 0px;
        

        img{
          width: 30px;
          height: 30px;
          text-align: center;
          margin-top: 10px;
          margin-bottom: 0px;
        }

      }
      .time{
        margin-right: 10px;
      }
      .comment{
        text-align: left;
        margin-left: 150px;
      }
    }
  


</style>
