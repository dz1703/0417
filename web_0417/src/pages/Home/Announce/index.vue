<template>
    <container class="container">
        <div class="title">公告标题</div>
        <div style="height:20px"></div>
        <div class="subtitle">发布时间: 2022年X月X日 | 阅读次数: XX次</div>
        <div style="height:40px"></div>
        <div class="text">Vue是一套用于构建用户界面的渐进式框架.与其它大型框架不同的是,Vue 被设计为可以自底向上逐层应用.Vue 的核心库只关注视图层,不仅易于上手,还便于与第三方库或既有项目整合.
            另一方面,当与现代化的工具链以及各种支持类库结合使用时,Vue 也完全能够为复杂的单页应用提供驱动.</div>
        <div style="height:40px"></div>
        <div class="inscribe">校园二手交易平台</div>
        <div style="height:20px"></div>
        <div class="time">二〇二二年XX月XX日</div>
    </container>
</template>

<script>
export default {
  name: '',
}
</script>

<style>
    /* .main{
        height: 2000px;
    } */
    .container{
        width:400px;
    }
    .title{
        text-align: center;
        font-size:24px
    }
    .subtitle{
        margin-left: 400px;
        text-align: left;
        font-size:14px
    }
    .text{
        margin-left: 400px;
        text-align: center;
        width:800px;
        line-height: 30px;
    }
    .inscribe{
        margin-right: 400px;
        text-align: right;
    }
    .time{
        margin-right: 400px;
        text-align: right;
    }
</style>
