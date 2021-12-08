  <template>
  <div class="tweet-card">
    <router-link
      :to="{ name: 'tweet', params: { id: tweet.User.id } }"
      class="tweet-card-img"
      ><img class="tweet-card-img" :src="tweet.User.avatar | emptyImage"
    /></router-link>
    <div class="tweet-card-content">
      <div class="tweet-card-content-info">
        <span class="name">{{ tweet.User.name }}</span>
        <span class="account">@{{ tweet.User.account }}</span>
        <span class="created-at">{{ tweet.createdAt | fromNow }}</span>
        <router-link :to="{ name: 'tweets-detail', params: { id: tweet.id } }">
          <div class="tweet-card-content-text">
            {{ tweet.description }}
          </div>
        </router-link>

        <div class="tweet-card-content-reply">
          <router-link
            :to="{ name: 'tweets-detail', params: { id: tweet.id } }"
          >
            <div class="content-reply">
              <img
                class="content-reply-icon"
                src="./../assets/images/comment-icon.svg"
              />
              <span class="content-reply-number">{{
                tweet.commentCounts
              }}</span>
            </div>
          </router-link>

          <div class="content-reply" @click.prevent.stop="likeToggle(tweet.id)">
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
              :disabled="isProcessing"
              >{{ tweet.likeCounts }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tweetAPI from "../apis/tweet";
import { Toast } from "../utils/helpers";
import { fromNowFilter } from "./../utils/mixins";
import { emptyImageFilter } from "./../utils/mixins";

export default {
  mixins: [fromNowFilter, emptyImageFilter],
  name: "UserTweetFeed",
  props: {
    initialTweet: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tweet: this.initialTweet,
      isProcessing: false,
    };
  },
  methods: {
    async likeToggle(tweetId) {
      try {
        this.isProcessing = true;
        let like = !this.tweet.isLiked;
        let response = {};
        if (like) {
          response = await tweetAPI.addLike({ tweetId });
        } else {
          response = await tweetAPI.deleteLike({ tweetId });
        }

        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        if (like) {
          like = 1;
        } else {
          like = 0;
        }
        this.tweet = {
          ...this.tweet,
          isLiked: like,
        };
        if (like === 1) {
          this.tweet = {
            ...this.tweet,
            likeCounts: this.tweet.likeCounts + 1,
          };
        } else {
          this.tweet = {
            ...this.tweet,
            likeCounts: this.tweet.likeCounts - 1,
          };
        }

        this.isProcessing = false;
      } catch (err) {
        this.isProcessing = false;
        Toast.fire({
          icon: "warning",
          title: err.message,
        });
      }
    },
  },
  watch: {
    initialTweets(newValue) {
      this.tweets = {
        ...this.tweets,
        ...newValue,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_userTweets.scss";
</style>