<template>
  <div class="tweet-card">
    <router-link
      :to="{ name: 'tweet', params: { id: likedTweet.Tweet.User.id } }"
      class="tweet-card-img"
      ><img
        class="tweet-card-img"
        :src="likedTweet.Tweet.User.avatar | emptyImage"
    /></router-link>
    <div class="tweet-card-content">
      <div class="tweet-card-content-info">
        <span class="name">{{ likedTweet.Tweet.User.name | nameLength }}</span>
        <span class="account">@{{ likedTweet.Tweet.User.account }}</span>
        <span class="created-at">{{ likedTweet.createdAt | fromNow }}</span>
      </div>
      <router-link
        :to="{ name: 'tweets-detail', params: { id: likedTweet.TweetId } }"
      >
        <div class="tweet-card-content-text">
          {{ likedTweet.Tweet.description }}
        </div>
      </router-link>

      <div class="tweet-card-content-reply">
        <div
          class="content-reply"
          @click.stop.prevent="replyModalClick(likedTweet.TweetId)"
        >
          <img
            class="content-reply-icon"
            src="./../assets/images/comment-icon.svg"
          />
          <span class="content-reply-number">{{
            likedTweet.Tweet.commentCounts
          }}</span>
        </div>
        <div class="content-reply" @click="unlike(likedTweet.TweetId)">
          <img
            class="content-reply-icon"
            src="./../assets/images/active-like-icon.svg"
          />
          <span
            class="content-reply-number"
            :class="{ active: likedTweet.Tweet.isLiked === 1 }"
            >{{ likedTweet.Tweet.likeCounts }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tweetAPI from "../apis/tweet";
import { Toast } from "../utils/helpers";
import { fromNowFilter } from "./../utils/mixins";
import { emptyImageFilter } from "./../utils/mixins";
import { nameLengthFilter } from "./../utils/mixins";

export default {
  mixins: [fromNowFilter, emptyImageFilter, nameLengthFilter],
  name: "UserLikedFeed",
  props: {
    initialLikedTweet: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      likedTweet: this.initialLikedTweet,
    };
  },
  methods: {
    async unlike(tweetId) {
      try {
        this.isProcessing = true;
        const { data } = await tweetAPI.deleteLike({ tweetId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$emit("after-unlike-tweet");
        this.isProcessing = false;
      } catch (err) {
        this.isProcessing = false;
        Toast.fire({
          icon: "warning",
          title: err.message,
        });
      }
    },
    replyModalClick(tweetId) {
      this.$emit("after-reply-modal-click", tweetId);
      console.log(tweetId);
    },
  },
  watch: {
    initialLikedTweet(newValue) {
      this.likedTweet = {
        ...this.likedTweet,
        ...newValue,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_userTweets.scss";
</style>
