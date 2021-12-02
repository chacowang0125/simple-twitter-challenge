<template>
  <div class="tweet">
    <div class="tweet-avatar">
      <img class="avatar-img" :src="tweet.User.avatar" alt="user avatar" />
    </div>
    <div class="tweet-description">
      <span class="tweet-user-name">{{ tweet.User.name }}</span>
      <span class="tweet-user-detail">@{{ tweet.User.account }}</span>
      <span class="tweet-user-detail">&bull;</span>
      <span class="tweet-user-detail">{{ tweet.createdAt | fromNow }}</span>
      <div class="tweet-text">{{ tweet.description }}</div>
    </div>
    <div class="tweet-delete-btn">
      <img
        class="tweet-delete-icon"
        src="@/assets/images/tweet-delete.svg"
        alt="tweet delete icon"
      />
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";

export default {
  mixins: [fromNowFilter],
  name: "AdminTweetList",
  props: {
    tweet: {
      type: Object,
      required: true,
    },
  },
  // methods: {
  //   handleDeleteTweet(tweetId) {
  //     this.$emit("after-delete-tweet", tweetId);
  //   },
  // },
};
</script>

<style lang="scss">
@import "./../assets/styles/_adminTweet.scss";
</style>