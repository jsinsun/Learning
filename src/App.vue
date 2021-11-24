<template>
  <div id="app">
    <div class="manage_page fillcontain">
      <el-row style="height: 100%">
        <el-col
          :span="3"
          style="min-height: 100%; background-color: #324157; overflow: hidden"
        >
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
              <template slot="title"
                ><i class="el-icon-document"></i>工作台</template
              >
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
          </el-menu>
        </el-col>
        <el-col :span="21">
          <div class="head">top</div>
          <div class="page"> <router-view></router-view></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data () {
    return {}
  },
  mounted () {},
  methods: {
    handleOpen (key, keyPath) {},
    handleClose (key, keyPath) {}
  }
}
</script>

<style lang="less">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  height: 100%;
  background: #ebebeb;

  .fillcontain {
    height: 100%;

    .el-menu {
      border: 0 !important;

      .el-col {
        background-color: #cbdae9;
        height: 100%;
        overflow: auto;
      }
    }
  }
}

#app {
  /deep/ .el-submenu .el-menu-item {
    background-color: #1f2d3d !important;
  }
  /deep/ .el-submenu__title:hover,
  .el-submenu .el-menu-item:hover {
    background-color: #48576a !important;
  }

   .head {
          width:100%;
          height: 100px;
          background-color: #fff;
        }

    .page{
       padding: 10px;
    }
}
</style>
