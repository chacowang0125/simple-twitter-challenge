<template>
  <div class="container">
    <NavBar />
    <div class="main-container">
      <PostDetailCard :initial-tweet="tweet" :replies="replies" />
    </div>
    <div class="popularbar-container">
      <PopularBar />
    </div>
    <div class="modal">
      <ReplyPostModal
        v-show="openReplyPostModal"
        :tweet="tweet"
        @after-submit="handleAfterSubmit"
      />
    </div>
  </div>
</template>

<script>
import NavBar from "./../components/NavBar.vue";
import PopularBar from "./../components/PopularBar.vue";
import PostDetailCard from "./../components/PostDetailCard.vue";
import ReplyPostModal from "./../components/ReplyPostModal.vue";
import tweetAPI from "../apis/tweet";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";

export default {
  name: "UserMain",
  components: {
    NavBar,
    PopularBar,
    PostDetailCard,
    ReplyPostModal,
  },
  data() {
    return {
      tweet: "",
      replies: [],
    };
  },
  methods: {
    async fetchTweet(tweetid) {
      try {
        const response = await tweetAPI.getTweet(tweetid);
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        this.tweet = response.data;
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法取得推文資料請稍後再試",
        });
      }
    },
    async fetchReplies(tweetid) {
      try {
        const response = await tweetAPI.getTweetReplies(tweetid);
        console.log(response);
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        this.replies = response.data;
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法取得推文回覆資料請稍後再試",
        });
      }
    },
    async handleAfterSubmit(formData) {
      try {
        console.log(formData);
        console.log(this.tweet.id);
        this.isProcessing = true;
        const { data } = await tweetAPI.addTweetReply({
          tweetId: this.tweet.id,
          comment: formData,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
				Toast.fire({
					icon: "success",
					title: "新增回覆成功"
				})
        this.$store.commit("toggleReplyPostModal");
        this.$router.go(); //跳頁
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "warning",
          title: "無法新增回覆，請稍後再試",
        });
      }
    },
  },
  computed: {
    ...mapState(["openReplyPostModal"]),
  },
  created() {
    const { id } = this.$route.params;
    this.fetchTweet(id);
    this.fetchReplies(id);
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/_tweet.scss";
</style>
