<template>
  <div class="nav-top">
    <h3 v-if="currentRouteName === 'AdminSignIn'">推文清單</h3>
    <h3 v-else>使用者列表</h3>
  </div>
</template>

<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>


<style lang="scss">
@import "./../assets/styles/_adminTweet.scss";
</style>