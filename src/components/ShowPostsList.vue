<template>
  <div class="container">
    <div v-for="tweet in tweets" :key="tweet.id" class="tweet-card">
      <div class="tweet-card-img">
        <img :src="tweet.User.avatar" alt="" />
      </div>
      <div class="tweet-card-content">
        <div class="tweet-card-content-info">
          <span class="name">{{ tweet.User.name }}</span>
          <span class="account">{{ tweet.User.account }}</span>
          <span class="created-at">{{ tweet.createdAt }}</span>
        </div>
        <div
          class="tweet-card-content-text"
          @click.stop.prevent="openReplyPostModal(tweet.id)"
        >
          {{ tweet.description }}
        </div>
        <div class="tweet-card-content-reply">
          <a href="#">
            <div class="content-reply">
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
            <div class="content-reply">
              <img
                class="content-reply-icon"
                src="./../assets/images/like-icon.svg"
              />
              <span class="content-reply-number">{{ tweet.likeCounts || 0}}</span>
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
export default {
  props: {
    tweets: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    openReplyPostModal(id) {
      console.log(id);
      this.$store.commit("toggleReplyPostModal");
    },
  },
  created() {},
};
</script>
