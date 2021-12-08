<template>
  <div class="container">
    <Navbar />
    <div class="main-container">
      <UserFollowedFeed
        :followers="followers"
        :userTweetsCount="userTweetsCount"
        :user="user"
        @update-followed="updateFollowed"
      />
    </div>
    <PopularBar @after-follow-click="afterFollowClick" />
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
import PopularBar from "../components/PopularBar.vue";
import UserFollowedFeed from "../components/UserFollowedFeed.vue";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  name: "UserFollowed",
  components: {
    Navbar,
    UserFollowedFeed,
    PopularBar,
  },
  data() {
    return {
      user: "",
      followers: [],
      userTweetsCount: "",
    };
  },
  methods: {
    async getUser(userId) {
      try {
        console.log("userId", userId);
        const response = await usersAPI.getUser({ userId });
        this.user = response.data;
      } catch (error) {
        Toast.fire({ icon: "warning", title: "無法取得使用者資料請後再試" });
      }
    },
    async fetchFollowers(userId) {
      try {
        const { data } = await usersAPI.getFollowers({ userId });
        this.followers = data;
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法取得跟隨者資料，請稍後再試",
        });
      }
    },
    async fetchTotaltweets(userId) {
      try {
        const { data } = await usersAPI.getTotalTweets({ userId });
        this.userTweetsCount = data.length;
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法取得所有推文資料，請稍後再試",
        });
      }
    },
    //子層觸發渲染畫面
    updateFollowed() {
      const { id } = this.$route.params;
      this.fetchFollowers(id);
    },
    afterFollowClick() {
      this.fetchFollowers(this.user.id);
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchFollowers(id);
    this.getUser(id);
    this.fetchTotaltweets(id);
    console.log(id);
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  .main-container {
    flex: 1;
  }
}
</style>
