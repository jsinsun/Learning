<template>
  <div class="fillcontain">
    <el-row style="height: 100%">
      <el-col
        :span="3"
        style="min-height: 100%; background-color: #324157; overflow: hidden"
      >
        <sidebar></sidebar>
      </el-col>
      <el-col :span="21">
        <div class="head">top</div>
        <div class="page"><router-view></router-view></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import sidebar from "./components/sidebar";

export default {
  components: {
    sidebar,
  },
  data() {},
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
  },
};
</script>

<style lang="less" scoped>
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
</style>
