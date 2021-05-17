<template>
  <div>
    我是首页
    <div>服务端返回数据：{{ homeInfo }}</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  serverRequest(store) {
    return store.dispatch("getHomeInfo");
  },
  computed: {
    homeInfo() {
      return this.$store.state.homeInfo;
    },
  },
};
</script>

<style></style>
