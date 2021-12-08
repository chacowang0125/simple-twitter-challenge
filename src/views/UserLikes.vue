  <template>
  <div>
    <Spinner v-show="isLoading" />
    <div class="container" v-show="!isLoading">
      <div v-if="this.likedTweets.length === 0" class="empty-message">
        使用者沒有任何喜歡推文 (ノ▼Д▼)ノ
      </div>
      <div class="user-tweet-container">
        <UserLikedFeed
          v-for="likedTweet in likedTweets"
          :key="likedTweet.id"
          :initial-liked-tweet="likedTweet"
          @after-unlike-tweet="afterUnlikeTweet"
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
import UserLikedFeed from "../components/UserLikedFeed.vue";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";
import Spinner from "./../components/Spinner.vue";
import { mapGetters } from "vuex";
import ReplyPostModal from "../components/ReplyPostModal.vue";
import tweetAPI from "../apis/tweet";

export default {
  mixins: [fromNowFilter],
  name: "UserLikedView",
  components: {
    UserLikedFeed,
    Spinner,
    ReplyPostModal,
  },
  data() {
    return {
      likedTweets: [],
      isLoading: true,
      modaltweet: {},
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchLikedTweets(id);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchLikedTweets(id);
    next();
  },
  methods: {
    async fetchLikedTweets(userId) {
      try {
        const response = await usersAPI.getUserLikes({
          userId,
        });
        const { data } = response;
        this.likedTweets = data;
        this.isLoading = false;
      } catch (error) {
        const { data } = error.response;
        Toast.fire({
          icon: "warning",
          title: data.message,
        });
      }
    },
    afterUnlikeTweet() {
      const { id } = this.$route.params;
      this.fetchLikedTweets(id);
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
    ...mapGetters(["getReplyCreated"]),
  },
  watch: {
    getReplyCreated: {
      deep: true,
      handler() {
        const { id } = this.$route.params;

        this.fetchLikedTweets(id);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_userTweets.scss";
</style>