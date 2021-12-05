<template>
  <div class="container">
    <NavBar />
    <div id="profile">
      <UserTopNav />
      <div id="profile-user">
        <UserProfileComponent :initialUser="user" />
      </div>
      <div id="stepper">
        <UserStepper />
      </div>
      <router-view
        :user="user"
        :initialTweets="tweets"
        :comments="comments"
        :initialLiked="liked"
      />
    </div>
    <div class="popularbar-container">
      <PopularBar />
    </div>
    <UserEditModal :initialUser="user" />
  </div>
</template>

<script>
// import { Toast } from "./../utils/helpers";
import NavBar from "./../components/NavBar.vue";
import PopularBar from "./../components/PopularBar.vue";
import UserTopNav from "./../components/UserTopNav.vue";
import UserProfileComponent from "../components/UserProfileComponent.vue";
import UserStepper from "./../components/UserStepper.vue";
import UserEditModal from "./../components/UserEditModal.vue";

const dummyUser = {
  user: {
    id: 3,
    account: "user3",
    name: "測試人員",
    avatar:
      "https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334",
    cover:
      "https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334",
    introduction: "我只是一個測試人員",
    isFollowed: 1,
    followings: 2,
    followers: 3,
  },
};

const dummyData = {
  tweets: [
    {
      id: 1,
      description: "這是一條測試貼文",
      likeCounts: 15,
      commentCounts: 5,
      createdAt: "2021-11-30T12:30:00",
      isLiked: 1,
      User: {
        id: 2,
        name: "普通人",
        account: "user2",
        avatar: "avatar_URL",
      },
    },
    {
      id: 4,
      description: "我只是貼文ＱＱ",
      likeCounts: 3,
      commentCounts: 1,
      createdAt: "2021-11-28T12:30:00",
      isLiked: 0,
      User: {
        id: 2,
        name: "普通人",
        account: "user2",
        avatar: "avatar_URL",
      },
    },
  ],
};

const dummyComment = {
  comments: [
    {
      id: 2,
      comment: "回覆在此",
      createdAt: "2021-12-02T12:30:00",
      User: {
        id: 2,
        name: "普通人",
        account: "user2",
        avatar: "avatar_URL",
      },
      Tweet: {
        id: 2,
        User: {
          id: 3,
          account: "user3",
        },
      },
    },
    {
      id: 5,
      comment: "今天有點冷",
      createdAt: "2021-12-01T12:30:00",
      User: {
        id: 2,
        name: "普通人",
        account: "user2",
        avatar: "avatar_URL",
      },
      Tweet: {
        id: 4,
        User: {
          id: 4,
          account: "user4",
        },
      },
    },
  ],
};

const dummyLiked = {
  liked: [
    {
      id: 1,
      TweetId: 2,
      createdAt: "2021-12-02T12:30:00",
      Tweet: {
        id: 2,
        description: "我只是貼文ＱＱ",
        isLiked: 1,
        commentCounts: 10,
        likeCounts: 22,
        User: {
          id: 3,
          account: "user2",
          avatar: "avatar_URL",
        },
      },
    },
    {
      id: 5,
      TweetId: 1,
      createdAt: "2021-11-30T12:30:00",
      Tweet: {
        id: 1,
        description: "推特好神奇",
        isLiked: 1,
        commentCounts: 55,
        likeCounts: 11,
        User: {
          id: 3,
          account: "user2",
          avatar: "avatar_URL",
        },
      },
    },
  ],
};

export default {
  name: "UserProfile",
  components: {
    NavBar,
    PopularBar,
    UserTopNav,
    UserProfileComponent,
    UserStepper,
    UserEditModal,
  },
  data() {
    return {
      user: {
        id: -1,
        name: "",
        account: "",
        avatar: "",
        cover: "",
        followerCounts: "",
        followingCounts: "",
      },
      tweets: [],
      comments: [],
      liked: [],
      // tweets: [
      //   {
      //     id: -1,
      //     description: "",
      //     likeCounts: "",
      //     commentCounts: "",
      //     createdAt: "",
      //     isLiked: "",
      //     user: [],
      //   },
      // ],
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
    this.fetchTweet(id);
    this.fetchComment(id);
    this.fetchLiked(id);
    console.log(id);
  },
  // beforeRouteUpdate(to, from, next) {
  //   const { id } = to.params;
  //   this.fetchUser(id);
  //   next();
  // },
  methods: {
    fetchUser(userId) {
      console.log("user id: ", userId);
      this.user = {
        id: dummyUser.user.id,
        name: dummyUser.user.name,
        account: dummyUser.user.account,
        introduction: dummyUser.user.introduction,
        avatar: dummyUser.user.avatar,
        cover: dummyUser.user.cover,
        followerCounts: dummyUser.user.followers,
        followingCounts: dummyUser.user.followings,
      };
    },
    fetchTweet(userId) {
      console.log("user id: ", userId);
      this.tweets = dummyData.tweets;
      // this.tweets = {
      //   id: dummyData.tweets.id,
      //   description: dummyData.tweets.description,
      //   likeCounts: dummyData.tweets.likeCounts,
      //   commentCounts: dummyData.tweets.commentCounts,
      //   createdAt: dummyData.tweets.createdAt,
      //   isLiked: dummyData.tweets.isLiked,
      //   user: dummyData.tweets.User,
      // };
    },
    fetchLiked(userId) {
      console.log("user id: ", userId);
      this.liked = dummyLiked.liked;
      // this.tweets = {
      //   id: dummyData.tweets.id,
      //   description: dummyData.tweets.description,
      //   likeCounts: dummyData.tweets.likeCounts,
      //   commentCounts: dummyData.tweets.commentCounts,
      //   createdAt: dummyData.tweets.createdAt,
      //   isLiked: dummyData.tweets.isLiked,
      //   user: dummyData.tweets.User,
      // };
    },
    fetchComment(userId) {
      console.log("user id: ", userId);
      this.comments = dummyComment.comments;
      // async fetchUser(userId) {
      //   try {
      //     console.log(userId);
      //     // const { data } = dummyUser.user;
      //     const { user } = dummyUser.user;
      //     const {
      //       id,
      //       name,
      //       account,
      //       avatar,
      //       cover,
      //       followerCounts,
      //       followingCounts,
      //     } = user;
      //     this.user = {
      //       id,
      //       name,
      //       account,
      //       avatar,
      //       cover,
      //       followerCounts,
      //       followingCounts,
      //     };
      //   } catch (error) {
      //     console.log("error", error);
      //     Toast.fire({
      //       icon: "error",
      //       title: "無法取得餐廳資料，請稍後再試",
      //     });
      //   }
      // },
    },
  },
};
</script>

<style lang="scss" scoped>
#profile {
  min-width: 600px;
  flex: 1;
}

.container {
  display: flex;
}
</style>
