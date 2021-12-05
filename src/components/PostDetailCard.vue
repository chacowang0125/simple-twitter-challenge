<template>
  <div class="container">
    <div class="page-title">推文</div>
    <div class="tweet-card">
      <div class="tweet-card-info">
        <div class="tweet-card-info-img">
          <img :src="tweet.user.avatar" alt="" />
        </div>
        <div class="tweet-card-info-name">
          <div class="name">{{ tweet.user.name }}</div>
          <div class="account">{{ tweet.user.account }}</div>
        </div>
      </div>
      <div class="tweet-card-content">
        <p class="tweet-card-content-text">
          {{ tweet.description }}
        </p>
        <div class="tweet-card-content-time">
          <span>{{ tweet.createdAt }} • 2020年6月10日</span>
        </div>
      </div>
      <div class="tweet-card-reply">
        <span>
          <b>{{ tweet.commentCounts }}</b
          >回覆
        </span>
        <span>
          <b>{{ tweet.likeCounts }}</b
          >喜歡次數
        </span>
      </div>
      <div class="tweet-card-reply">
        <a href=""
          ><img src="../assets/images/comment-icon.svg" alt="comment-icon"
        /></a>
        <a href=""
          ><img src="../assets/images/like-icon.svg" alt="like-icon"
        /></a>
      </div>
    </div>
    <div class="tweet-reply-list">
      <a href="">
        <div v-for="reply in replies" :key="reply.id" class="tweet-reply">
          <div class="tweet-reply-img">
            <img :src="reply.avatar" alt="" />
          </div>
          <div class="tweet-reply-content">
            <div class="tweet-reply-content-info">
              <span class="name">{{ reply.name }}</span>
              <span class="info"
                >{{ reply.account }} • {{ reply.createdAt }}</span
              >
            </div>
            <div class="tweet-reply-content-avatar">
              回覆 <span>@Apple</span>
            </div>
            <div class="tweet-reply-content-comment">
              {{ reply.comment }}
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostDetailCard",
  data() {
    return {
      tweet: {
        id: 1,
        user: {
          id: 1,
          name: "Chaco",
          account: "@chaco",
          avatar: "https://picsum.photos/200",
        },
        createdAt: "上午10:00",
        description: "今天天氣真的有夠冷",
        likeCounts: 12,
        commentCounts: 23,
        isLiked: true,
      },
      replies: [
        {
          id: 1,
          name: "Apple",
          account: "@apple",
          avatar: "https://picsum.photos/200",
          comment: "Good Job!",
          createdAt: "2小時前",
        },
        {
          id: 2,
          name: "Apple",
          account: "@apple",
          avatar: "https://picsum.photos/200",
          comment: "Good Job!",
          createdAt: "2小時前",
        },
        {
          id: 3,
          name: "Apple",
          account: "@apple",
          avatar: "https://picsum.photos/200",
          comment: "Good Job!",
          createdAt: "2小時前",
        },
        {
          id: 4,
          name: "Apple",
          account: "@apple",
          avatar: "https://picsum.photos/200",
          comment: "Good Job!",
          createdAt: "2小時前",
        },
        {
          id: 5,
          name: "Apple",
          account: "@apple",
          avatar: "https://picsum.photos/200",
          comment: "Good Job!",
          createdAt: "2小時前",
        },
        {
          id: 6,
          name: "Apple",
          account: "@apple",
          avatar: "https://picsum.photos/200",
          comment: "Good Job!",
          createdAt: "2小時前",
        },
      ],
    };
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "./../assets/styles/_postdetailcard.scss";
</style>
