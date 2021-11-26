<template>
  <div class="exercises">
    <div></div>
    <div>
      <div>{{ this.$store.state.desc }}</div>
    </div>
    <div></div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: mapState({
    count: "count",
    name: "desc",
  }),
  mounted() {
   // console.log(this.$store.getters.donetodos);
   //console.log(JSON.stringify(this.$store.state.numbers));

    //this.$store.commit('convert')
    // this.$store.commit({
    //   type: "increment",
    //   name: "jsin",
    // });

    // this.$store.dispatch("convert");
    // console.log(this.$store.state.numbers);
    this.add();
  },
  methods: {
    ...mapMutations(["increment", "convert", "property"]),
    ...mapMutations({
      add: "SOME_MUTATION",
    }),
  },
};
</script>
<style lang="less" scoped>
.exercises {
  height: 100vh;
  padding: 1rem;
  background-color: #fff;
  border-radius: 2px;
  display: flex;
  justify-content: start;

  div:nth-child(1),
  div:nth-child(3) {
    width: 100px;
    height: 100%;
    background: rgb(86, 151, 204);
  }

  div:nth-child(2) {
    flex: 1;
    //自适应
    display: flex;
    //水平垂直居中
    align-items: center;
    justify-content: center;

    div {
      width: 200px;
      height: 200px;
      background: chocolate;
      align-items: center;
      white-space: pre-line;
    }
  }
}
</style>
