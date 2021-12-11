<template>
  <div class="container">
    <div class="page-title">
      <img
        class="profile-topnav-icon"
        src="./../assets/images/exit-icon.svg"
        @click.stop.prevent="routerBack"
      />
      <div class="page-title-name">推文</div>
    </div>
    <div class="tweet-card">
      <div class="tweet-card-info">
        <div class="tweet-card-info-img">
          <router-link :to="{ name: 'tweet', params: { id: tweet.User.id } }">
            <img :src="tweet.User.avatar | emptyImage" alt="" />
          </router-link>
        </div>
        <div class="tweet-card-info-name">
          <div class="name">{{ tweet.User.name }}</div>
          <div class="account">@{{ tweet.User.account }}</div>
        </div>
      </div>
      <div class="tweet-card-content">
        <p class="tweet-card-content-text">
          {{ tweet.description }}
        </p>
        <div class="tweet-card-content-time">
          <span>{{ tweet.createdAt | dateToString }} </span>
        </div>
      </div>
      <div class="tweet-card-reply">
        <span>
          <b>{{ tweet.commentCounts || 0 }}</b
          >回覆
        </span>
        <span>
          <b>{{ tweet.likeCounts || 0 }}</b
          >喜歡次數
        </span>
      </div>
      <div class="tweet-card-reply">
        <span @click.stop.prevent="openReplyPostModal">
          <img src="../assets/images/comment-icon.svg" alt="comment-icon" />
        </span>
        <span
          @click.prevent.stop="likeToggle(tweet.id)"
          :disabled="isProcessing"
        >
          <img
            v-if="tweet.isLiked === 1"
            src="../assets/images/liked-icon.svg"
            alt="liked-icon"
          />
          <img v-else src="../assets/images/like-icon.svg" alt="like-icon" />
        </span>
      </div>
    </div>
    <div class="tweet-reply-list">
      <div v-if="replies.length === 0" class="no-replies">
        此推文目前還沒有任何回覆(＞﹏＜)
      </div>
      <div v-else v-for="reply in replies" :key="reply.id" class="tweet-reply">
        <div class="tweet-reply-img">
          <router-link :to="{ name: 'tweet', params: { id: reply.User.id } }">
            <img :src="reply.User.avatar | emptyImage" alt="" />
          </router-link>
        </div>
        <div class="tweet-reply-content">
          <div class="tweet-reply-content-info">
            <span class="name">{{ reply.User.name }}</span>
            <span class="info"
              >@{{ reply.User.account }} • {{ reply.createdAt | fromNow }}
            </span>
          </div>
          <div class="tweet-reply-content-avatar">
            回覆
            <router-link
              :to="{ name: 'tweet', params: { id: reply.Tweet.User.id } }"
            >
              <span>@{{ reply.Tweet.User.account }}</span>
            </router-link>
          </div>
          <div class="tweet-reply-content-comment">
            {{ reply.comment }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tweetAPI from "../apis/tweet";
import { Toast } from "../utils/helpers";
import { emptyImageFilter, fromNowFilter } from "../utils/mixins";

export default {
  name: "PostDetailCard",
  mixins: [emptyImageFilter, fromNowFilter],
  props: ["initialTweet", "replies"],
  // props: {
  //   initialTweet: {
  //     type: Object,
  //     required: true,
  //   },
  //   replies: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  data() {
    return {
      tweet: this.initialTweet,
      isProcessing: false,
    };
  },
  methods: {
    openReplyPostModal() {
      this.$store.commit("toggleReplyPostModal");
    },
    routerBack() {
      this.$router.back();
    },
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
    initialTweet(newValue) {
      this.tweet = {
        ...this.tweet,
        ...newValue,
      };
    },
  },
  filters: {
    dateToString(value) {
      const dateString = new Date(value).toLocaleDateString("zh-TW", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const timeString = new Date(value).toLocaleTimeString("zh-TW", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return `${timeString}·${dateString}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/styles/_postdetailcard.scss";
</style>
