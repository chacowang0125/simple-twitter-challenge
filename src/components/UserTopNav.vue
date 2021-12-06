<template>
  <div class="profile-topnav-wrapper">
    <img
      class="profile-topnav-icon"
      @click="$router.back()"
      src="./../assets/images/exit-icon.svg"
    />
    <div class="container">
      <h3 class="profile-topnav name">{{ user.name }}</h3>
      <span class="profile-topnav tweet-count"
        >{{ user.tweetsCounts }}推文</span
      >
    </div>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
export default {
  name: "UserTopNav",
  data() {
    return {
      user: {
        name: "",
        tweetsCounts: "",
      },
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  methods: {
    async fetchUser(userId) {
      try {
        const response = await usersAPI.getUser({
          userId,
        });
        console.log(response);
        const { data } = response;
        const { name, tweetsCounts } = data;
        console.log(userId);
        this.user = {
          name,
          tweetsCounts,
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者，請稍後再試",
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/_userTopNav.scss";
</style>