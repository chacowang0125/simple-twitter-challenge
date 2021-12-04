<template>
  <div class="profile-user-card">
    <div class="profile-user-img">
      <img class="profile-user-img cover" :src="user.cover" />
      <img class="profile-user-img avatar" :src="user.avatar" />
      <button class="btn btn-profile-edit">編輯個人資料</button>
    </div>

    <div class="profile-user-content">
      <div class="profile-user-info">
        <span class="profile-user-info name">{{ user.name }}</span>
        <span class="profile-user-info detail">@{{ user.account }}</span>
      </div>
      <span class="profile-user-info intro">fefefeeefee</span>

      <div class="profile-follow-wrapper">
        <div class="profile-follow group">
          <span class="profile-follow count"
            >{{ user.followingCounts }} 個</span
          >
          <span class="profile-follow text">跟隨中</span>
        </div>
        <div class="profile-follow group">
          <span class="profile-follow countt"
            >{{ user.followerCounts }} 個</span
          >
          <span class="profile-follow text">跟隨者</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileUser",
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/styles/_userProfile.scss";
</style>