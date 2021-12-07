<template>
  <div class="container">
    <Navbar />
    <div class="main-container">
      <UserFollowingFeed
        :followings="followings"
        :userTweetsCount="userTweetsCount"
        :user="user"
      />
    </div>
    <PopularBar />
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
import PopularBar from "../components/PopularBar.vue";
import UserFollowingFeed from "../components/UserFollowingFeed.vue";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  name: "UserFollowing",
  components: {
    Navbar,
    UserFollowingFeed,
    PopularBar,
  },
  data() {
    return {
      user: "",
      followings: [],
      userTweetsCount: "",
    };
  },
  methods: {
    async getUser(userId) {
      try {
        const { data } = await usersAPI.getUser(userId);
        this.user = data;
      } catch (error) {
        Toast.fire({ icon: "warning", title: "無法取得使用者資料請後再試" });
      }
    },
    async fetchFollowings(userId) {
      try {
        const { data } = await usersAPI.getFollowings({ userId });
        this.followings = data;
        console.log(data);
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法取得跟隨者資料，請稍後再試",
        });
      }
    },
    async fetchTotaltweets(userId) {
      try {
        const { data } = await usersAPI.getTotalTweets(userId);
        this.userTweetsCount = data.length;
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法取得所有推文資料，請稍後再試",
        });
      }
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchFollowings(id);
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