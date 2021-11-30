<template>
<div>
  <!-- <slot></slot> -->
  	<slot  :data='users'></slot>
</div>
</template>
<script>
export default {
  data(){
    return {
      users: ['jsin','sunxiong']
    }
  }
}
</script>
<style lang="less" scoped>

</style>
