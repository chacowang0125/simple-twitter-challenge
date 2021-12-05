  <template>
  <div class="container">
    <div class="tweet-card" v-for="like in liked" :key="like.id">
      <div class="tweet-card-img"></div>
      <div class="tweet-card-content">
        <div class="tweet-card-content-info">
          <span class="name">{{ like.Tweet.User.name }}</span>
          <span class="account">@{{ like.Tweet.User.account }}</span>
          <span class="created-at">{{ like.createdAt | fromNow }}</span>
        </div>
        <div class="tweet-card-content-text">
          {{ like.Tweet.description }}
        </div>
        <div class="tweet-card-content-reply">
          <a href="#">
            <div class="content-reply">
              <img
                class="content-reply-icon"
                src="./../assets/images/comment-icon.svg"
              />
              <span class="content-reply-number">{{
                like.Tweet.commentCounts
              }}</span>
            </div>
          </a>
          <div class="content-reply">
            <img
              v-if="like.Tweet.isLiked !== 1"
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
              :class="{ active: like.Tweet.isLiked === 1 }"
              >{{ like.Tweet.likeCounts }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";

export default {
  mixins: [fromNowFilter],
  name: "ProfileUser",
  props: {
    initialLiked: {
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
      liked: this.initialLiked,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_userTweets.scss";
</style>