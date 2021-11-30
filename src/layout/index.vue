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
                <span v-for="item in user.data" :key="item">{{ item }}</span>
              </div>
            </template>
          </header1>
        </div>
        <div class="page">
          <router-view
            v-if="!$route.meta.keepAlive"
          ></router-view>
          <!-- 需要缓存的视图组件 -->
          <keep-alive :include="include">
            <router-view
              v-if="$route.meta.keepAlive"
            ></router-view>
          </keep-alive>
        </div>
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
      include: [],
    };
  },
  watch: {
    $route(to, from){
      console.log(to);
      //注意,不是router.js中的name,而是单个vue组件中的name属性.建议将router.js中的name和vue组件的name保持一致,不要混乱.
      if (to.meta.keepAlive) {
        !this.include.includes(to.name) && this.include.push(to.name);
        console.log(this.include);
      }
    },
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
