<template>
  <div class="container">
    <div class="page-title">推文</div>
    <div class="tweet-card">
      <div class="tweet-card-info">
        <div class="tweet-card-info-img">
          <img src="" alt="" />
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
          <div class="tweet-reply-img"><img src="" alt="" /></div>
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
          avatar: "",
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
          avatar: "",
          comment: "Good Job!",
          createdAt: "2小時前",
        },
        {
          id: 2,
          name: "Apple",
          account: "@apple",
          avatar: "",
          comment: "Good Job!",
          createdAt: "2小時前",
        },
        {
          id: 3,
          name: "Apple",
          account: "@apple",
          avatar: "",
          comment: "Good Job!",
          createdAt: "2小時前",
        },
        {
          id: 4,
          name: "Apple",
          account: "@apple",
          avatar: "",
          comment: "Good Job!",
          createdAt: "2小時前",
        },
        {
          id: 5,
          name: "Apple",
          account: "@apple",
          avatar: "",
          comment: "Good Job!",
          createdAt: "2小時前",
        },
        {
          id: 6,
          name: "Apple",
          account: "@apple",
          avatar: "",
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
@import "../assets/styles/_variables.scss";
.page-title {
  @extend %page-title-style;
  &::before {
    content: "←";
    margin-right: 10px;
  }
}
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .tweet-card {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 15px;
    &-info {
      display: flex;
      &-img {
        @extend %avatar-img-style;
        border: 1px solid gray;
      }
      &-name {
        margin-left: 15px;
        .name {
          @extend %user-name-style;
        }
        .account {
          @extend %user-account-style;
        }
      }
    }
    &-content {
      padding: 15px 0;
      &-text {
        font-weight: 500;
        font-size: 23px;
        color: $main-font-color;
        line-height: 34px;
      }
      &-time {
        @extend %user-account-style;
        letter-spacing: 0.5px;
        margin-top: 15px;
      }
    }
    &-reply {
      border-top: 1px solid $page-divider;
      padding: 20px 0;
      span {
        margin-right: 20px;
        font-weight: 500;
        b {
          color: $main-font-color;
          margin: 0 3px;
        }
      }
      img {
        display: inline-block;
        width: 25px;
        height: 25px;
        margin: 0 100px 0 3px;
      }
      &:last-child {
        padding-bottom: 0;
      }
    }
  }
}
.tweet-reply-list {
  flex: 1;
  border-top: 1px solid $page-divider;
  overflow: scroll;
  &::-webkit-scrollbar {
    //捲軸寬度
    width: 3px;
    background-color: transparent;
    //捲軸本體顏色
    &-thumb {
      border-radius: 10px;
      background-color: $page-divider;
    }
  }
  .tweet-reply {
    padding: 15px;
    display: flex;
    flex-direction: row;
    font-size: 15px;
    border-bottom: 1px solid $page-divider;
    &-img {
      @extend %avatar-img-style;
      border: 1px solid gray;
    }
    &-content {
      flex: 1;
      padding: 0 10px;
      text-align: left;
      line-height: 23px;
      font-weight: 500;
      &-info {
        @extend %user-name-style;
        .info {
          margin-left: 5px;
          font-weight: 700;
          color: $label-font-color;
          letter-spacing: 0.5px;
        }
      }
      &-avatar {
        color: $label-font-color;
        span {
          color: $main-orange;
        }
      }
      &-comment {
        color: $main-font-color;
      }
    }
  }
}
</style>
