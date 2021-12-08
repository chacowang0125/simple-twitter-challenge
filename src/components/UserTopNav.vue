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
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  // methods: {
  //   async fetchUser(userId) {
  //     try {
  //       const response = await usersAPI.getUser({
  //         userId,
  //       });
  //       const { data } = response;
  //       const { name, tweetsCounts } = data;
  //       this.user = {
  //         name,
  //         tweetsCounts,
  //       };
  //     } catch (error) {
  //       console.log("error", error);
  //       Toast.fire({
  //         icon: "error",
  //         title: "無法取得使用者，請稍後再試",
  //       });
  //     }
  //   },
  // },
};
</script>

<style lang="scss">
@import "../assets/styles/_userTopNav.scss";
</style>