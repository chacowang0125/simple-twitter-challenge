<template>
  <div class="profile-topnav-wrapper">
    <img
      class="profile-topnav-icon"
      @click="$router.back()"
      src="./../assets/images/exit-icon.svg"
    />
    <div class="container">
      <h3 class="profile-topnav name">{{ user.name }}</h3>
      <span class="profile-topnav tweet-count"
        >{{ user.tweetsCounts }}推文</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "UserTopNav",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/_userTopNav.scss";
</style>