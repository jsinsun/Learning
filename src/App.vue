<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="less">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;

  #app {
    height: 100%;
    background: #ebebeb;

    //   .fillcontain {
    //     height: 100%;

    //     .el-menu {
    //       border: 0 !important;

    //       .el-col {
    //         background-color: #cbdae9;
    //         height: 100%;
    //         overflow: auto;
    //       }
    //     }
    //   }
    // }

    // #app {
    //   /deep/ .el-submenu .el-menu-item {
    //     background-color: #1f2d3d !important;
    //   }
    //   /deep/ .el-submenu__title:hover,
    //   .el-submenu .el-menu-item:hover {
    //     background-color: #48576a !important;
    //   }

    //   .head {
    //     width: 100%;
    //     height: 100px;
    //     background-color: #fff;
    //   }

    //   .page {
    //     padding: 10px;
    //   }
  }
}
</style>
