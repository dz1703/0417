<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2'
        },
        {
          label: '一级 3'
        }
      ]
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="less" scoped>
.el-col {
  // padding-left: 80px;
  // margin-left: 55px;
  // padding-right: 30px;
  height: 100%;
  .el-tree {
    width: 100%;
    height: 100%;
    .el-tree-node,
    .el-tree-node__content {
      height: 60px;
      margin-left: 50px;
    }
  }
}
</style>