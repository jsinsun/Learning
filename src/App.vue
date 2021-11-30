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
  }
}
</style>
