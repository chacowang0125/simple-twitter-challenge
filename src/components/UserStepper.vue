<template>
  <div class="profile-stepper">
    <div class="stepper-wrapper">
      <div
        class="stepper-container"
        :class="{ active: currentRouteName === 'tweet' }"
        @click.stop.prevent="TweetPage"
      >
        <span class="stepper-tab">推文</span>
      </div>
      <div
        class="stepper-container"
        :class="{ active: currentRouteName === 'comment' }"
        @click.stop.prevent="CommentPage"
      >
        <span class="stepper-tab">推文與回復</span>
      </div>
      <div
        class="stepper-container"
        :class="{ active: currentRouteName === 'liked' }"
        @click.stop.prevent="LikedPage"
      >
        <span class="stepper-tab">喜歡的內容</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    TweetPage() {
      this.$router.push({ name: "tweet" });
    },
    CommentPage() {
      this.$router.push({ name: "comment" });
    },
    LikedPage() {
      this.$router.push({ name: "liked" });
    },
  },
};
</script>



<style lang="scss">
@import "../assets/styles/_userStepper.scss";
</style>