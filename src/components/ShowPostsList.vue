<template>
  <div class="container">
    <div v-for="tweet in tweets" :key="tweet.id" class="tweet-card">
      <div class="tweet-card-img">
        <router-link :to="{ name: 'tweet', params: { id: tweet.User.id } }">
          <img :src="tweet.User.avatar | emptyImage" alt="avatar-img" />
        </router-link>
      </div>
      <div class="tweet-card-content">
        <div class="tweet-card-content-info">
          <span class="name">{{ tweet.User.name }}</span>
          <span class="account">{{ tweet.User.account }}</span>
          <span class="created-at">{{ tweet.createdAt | fromNow }}</span>
        </div>
        <router-link :to="{ name: 'tweets-detail', params: { id: tweet.id } }">
          <div class="tweet-card-content-text">
            {{ tweet.description }}
          </div>
        </router-link>
        <div class="tweet-card-content-reply">
          <a href="#">
            <div
              class="content-reply"
              @click.stop.prevent="openReplyPostModal(tweet.id)"
            >
              <img
                class="content-reply-icon"
                src="./../assets/images/comment-icon.svg"
              />
              <span class="content-reply-number">{{
                tweet.commentCounts || 0
              }}</span>
            </div>
          </a>
          <a href="#">
            <div
              class="content-reply"
              @click.stop.prevent="toggleLike(tweet.id)"
            >
              <img
                v-if="Like"
                class="content-reply-icon"
                src="./../assets/images/liked-icon.svg"
              />
              <img
                v-else
                class="content-reply-icon"
                src="./../assets/images/like-icon.svg"
              />

              <span class="content-reply-number" :class="{islike:Like}">{{
                tweet.likeCounts || 0
              }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_showpostslist.scss";
</style>

<script>
import { emptyImageFilter, fromNowFilter } from "../utils/mixins";
import moment from "moment";

export default {
  name: "ShowPostsList",
  mixins: [emptyImageFilter, fromNowFilter],
  props: {
    tweets: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      Like: true,
    };
  },
  methods: {
    openReplyPostModal(id) {
      console.log(id);
      this.$store.commit("toggleReplyPostModal");
    },
		//
    toggleLike(tweetId) {
      this.$emit("toggle-like-click", tweetId);
			this.Like = !this.Like
    },
  },
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      return moment(datetime).fromNow();
    },
  },
};
</script>
