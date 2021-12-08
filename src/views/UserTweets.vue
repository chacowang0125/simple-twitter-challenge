<template>
  <div>
    <Spinner v-show="isLoading" />
    <div class="container" v-show="!isLoading">
      <div v-if="this.tweets.length === 0" class="empty-message">
        使用者沒有任何推文 (ノ▼Д▼)ノ
      </div>
      <div class="user-tweet-container">
        <UserTweetFeed
          v-for="tweet in tweets"
          :key="tweet.id"
          :initial-tweet="tweet"
          @after-reply-modal-click="afterReplyModalClick"
        />
      </div>
      <div class="modal">
        <ReplyPostModal :tweet="modaltweet" @after-submit="afterReplySubmit" />
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import UserTweetFeed from "../components/UserTweetFeed.vue";
import usersAPI from "../apis/users";
import tweetAPI from "../apis/tweet";
import { Toast } from "../utils/helpers";
import Spinner from "./../components/Spinner.vue";
import { mapGetters } from "vuex";
import ReplyPostModal from "../components/ReplyPostModal.vue";
export default {
  mixins: [fromNowFilter],
  name: "UserTweetView",
  components: {
    UserTweetFeed,
    Spinner,
    ReplyPostModal,
  },
  data() {
    return {
      tweets: [],
      isLoading: true,
      modaltweet: {},
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchTweets(id);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchTweets(id);
    next();
  },
  methods: {
    async fetchTweets(userId) {
      try {
        const response = await usersAPI.getTotalTweets({
          userId,
        });
        const { data } = response;
        this.tweets = data;
        this.isLoading = false;
      } catch (error) {
        const { data } = error.response;
        Toast.fire({
          icon: "warning",
          title: data.message,
        });
      }
    },
    async afterReplyModalClick(tweetId) {
      try {
        this.$store.commit("toggleReplyPostModal");
        const { data } = await tweetAPI.getTweet({ tweetId });
        this.modaltweet = data;
        console.log(data);
      } catch {
        Toast.fire({
          icon: "warning",
          title: "無法取得推文資料，請稍後再試",
        });
      }
    },
    async afterReplySubmit(tweetid, comment) {
      try {
        const { data } = await tweetAPI.addTweetReply({
          tweetId: tweetid,
          comment: comment,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "回覆推文成功",
        });
        this.$store.commit("toggleReplyPostModal");
        this.$store.commit("toggleReplyCreated");
      } catch {
        Toast.fire({
          icon: "warning",
          title: "無法回覆留言，請稍後再試",
        });
      }
    },
  },
  computed: {
    ...mapGetters(["getTweetCreated", "getReplyCreated"]),
  },
  watch: {
    getTweetCreated: {
      deep: true,
      handler() {
        const { id } = this.$route.params;
        this.fetchTweets(id);
      },
    },
    getReplyCreated: {
      deep: true,
      handler() {
        const { id } = this.$route.params;
        this.fetchTweets(id);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_userTweets.scss";
</style>