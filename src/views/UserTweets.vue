  <template>
  <div class="container" v-show="!isLoading">
    <div v-if="this.tweets.length === 0" class="empty-message">
      使用者沒有任何推文 (ノ▼Д▼)ノ
    </div>
    <div class="user-tweet-container">
      <UserTweetFeed
        v-for="tweet in tweets"
        :key="tweet.id"
        :initial-tweet="tweet"
      />
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import UserTweetFeed from "../components/UserTweetFeed.vue";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  mixins: [fromNowFilter],
  name: "UserTweetView",
  components: {
    UserTweetFeed,
  },
  data() {
    return {
      tweets: [],
      isLoading: true,
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
        console.log("gang");
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
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_userTweets.scss";
</style>