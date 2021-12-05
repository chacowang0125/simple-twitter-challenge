  <template>
  <div class="container">
    <div class="tweet-card" v-for="tweet in tweets" :key="tweet.id">
      <router-link :to="{ name: 'tweet', params: { id: user.id } }" class="tweet-card-img"></router-link>
      <router-link
        :to="{ name: 'tweet-detail', params: { id: tweet.id } }"
        class="tweet-card-content"
      >
        <div
          class="tweet-card-content-info">
          <span class="name">{{ user.name }}</span>
          <span class="account">@{{ user.account }}</span>
          <span class="created-at">{{ tweet.createdAt | fromNow }}</span>
        <div class="tweet-card-content-text">
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
                tweet.commentCounts
              }}</span>
            </div>
          </a>
          <div class="content-reply">
            <img
              v-if="tweet.isLiked !== 1"
              class="content-reply-icon"
              src="./../assets/images/like-icon.svg"
            />
            <img
              v-else
              class="content-reply-icon"
              src="./../assets/images/active-like-icon.svg"
            />
            <span
              class="content-reply-number"
              :class="{ active: tweet.isLiked === 1 }"
              >{{ tweet.likeCounts }}</span
            >
          </div>
        </div>
				</div>
      </router-link>
    </div>
  </div>

</template>

<script>
import { fromNowFilter } from "./../utils/mixins";

export default {
  mixins: [fromNowFilter],
  name: "ProfileUser",
  props: {
    initialTweets: {
      type: Array,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tweets: this.initialTweets,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_userTweets.scss";
</style>