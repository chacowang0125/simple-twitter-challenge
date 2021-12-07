<template>
  <div class="container">
    <NavBar />
    <div class="main-container">
      <NewPostForm />
      <hr />
      <div class="showpostform-container">
        <ShowPostsList :tweets="tweets" @update-tweets="updateTweets" />
      </div>
    </div>
    <div class="popularbar-container">
      <PopularBar />
    </div>
    <div class="modal">
      <ReplyPostModal v-show="openReplyPostModal" />
      <CreateNewTweetModal
        v-show="openCreateNewTweetModal"
        @after-add-tweet="afterAddTweet"
      />
    </div>
  </div>
</template>

<script>
import NavBar from "./../components/NavBar.vue";
import PopularBar from "./../components/PopularBar.vue";
import NewPostForm from "./../components/NewPostForm.vue";
import ShowPostsList from "./../components/ShowPostsList.vue";
import CreateNewTweetModal from "../components/CreateNewTweetModal.vue";
import ReplyPostModal from "../components/ReplyPostModal.vue";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import tweetAPI from "../apis/tweet";

export default {
  name: "UserMain",
  components: {
    NavBar,
    PopularBar,
    NewPostForm,
    ShowPostsList,
    CreateNewTweetModal,
    ReplyPostModal,
  },
  data() {
    return {
      tweets: [],
    };
  },
  methods: {
    afterAddTweet() {
      this.$store.commit("toggleCreateNewTweetModal");
    },
    async getAllTweets() {
      try {
        const response = await tweetAPI.getAllTweets();
        this.tweets = response.data;
      } catch {
        Toast.fire({
          icon: "warning",
          title: "無法取得推文資料，請稍後再試",
        });
      }
    },
    //子層改變時重新抓取資料
    updateTweets() {
      this.getAllTweets();
    },
  },
  computed: {
    ...mapState(["openCreateNewTweetModal", "openReplyPostModal"]),
  },
  created() {
    this.getAllTweets();
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/_userMain.scss";
</style>
