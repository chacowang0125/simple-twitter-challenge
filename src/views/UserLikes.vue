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
        />
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

export default {
  mixins: [fromNowFilter],
  name: "UserLikedView",
  components: {
    UserLikedFeed,
    Spinner,
  },
  data() {
    return {
      likedTweets: [],
      isLoading: true,
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
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_userTweets.scss";
</style>