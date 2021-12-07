<template>
  <div>
    <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
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
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  mixins: [fromNowFilter],
  name: "AdminTweetList",
  data() {
    return {
      tweets: [],
    };
  },
  created() {
    this.fetchTweetss();
  },
  methods: {
    async fetchTweetss() {
      try {
        const { data } = await adminAPI.adminTweets();
        this.tweets = data;
      } catch (error) {
        this.isProcessing = false;
        const { data } = error.response;
        Toast.fire({
          icon: "warning",
          title: data.message,
        });
      }
    },
    async deleteRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.delete(restaurantId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurants = this.restaurants.filter(
          (restaurant) => restaurant.id !== restaurantId
        );
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "can't add to favorite",
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/_adminTweet.scss";
</style>