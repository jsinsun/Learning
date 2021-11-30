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
        <div class="head">
          <header1>
            <template slot-scope="user">
              <div class="tmpl">
                <span v-for="item in user.data" :key='item'>{{ item }}</span>
              </div>
            </template>
          </header1>
        </div>
        <div class="page"><router-view :key="$route.path"></router-view></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import sidebar from "./components/sidebar";
import header1 from "./header.vue";

export default {
  components: {
    sidebar,
    header1,
  },
  data() {
    return {
      html: '<div style="color:#333;">直接上标签</div>',
    };
  },
  mounted() {
    console.log(this.$route);
  },
  computed: {},
  methods: {},
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
