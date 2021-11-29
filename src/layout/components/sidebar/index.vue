
<template>
  <div class="sidebar">
    <el-menu
      router
      :default-active="$route.name"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#049eff"
    >
      <!-- <el-menu-item index="home"><i class="el-icon-menu"></i>首页</el-menu-item> -->
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-document"></i>工作台</template>
        <el-menu-item index="/">通知公告</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"
          ><i class="el-icon-document"></i>我的事务</template
        >
        <el-menu-item index="/work/start">发起事务</el-menu-item>
        <el-menu-item index="/work/claim">待签事务</el-menu-item>
        <el-menu-item index="/work/todo">待办事务</el-menu-item>
        <el-menu-item index="/work/send">已发事务</el-menu-item>
        <el-menu-item index="/work/done">办结事务</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"
          ><i class="el-icon-document"></i>流程管理</template
        >
        <el-menu-item index="/flow/model">模型管理</el-menu-item>
        <el-menu-item index="/flow/deploy">流程部署</el-menu-item>
        <el-menu-item index="/flow/manager">流程管理</el-menu-item>
        <el-menu-item index="/flow/follow">流程跟踪</el-menu-item>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title"> <i class="el-icon-document"></i>练习 </template>
        <el-menu-item index="/exercises">练习</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  //https://blog.csdn.net/keovady/article/details/89813582 TagsView导航栏
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
  },
};
</script>
<style lang="less" scoped>
.sidebar {
  .el-menu {
    border: 0 !important;
    .el-col {
      background-color: #cbdae9;
      height: 100%;
      overflow: auto;
    }
  }
}
</style>
