<template>
  <div class="profile-user-card">
    <div class="profile-user-img">
      <img class="profile-user-img cover" :src="user.cover" />
      <img class="profile-user-img avatar" :src="user.avatar" />
      <button class="btn btn-profile-edit" @click.prevent.stop="callModal">
        編輯個人資料
      </button>
    </div>

    <div class="profile-user-content">
      <div class="profile-user-info">
        <span class="profile-user-info name">{{ user.name }}</span>
        <span class="profile-user-info detail">@{{ user.account }}</span>
      </div>
      <span class="profile-user-info intro">{{ user.introduction }}</span>

      <div class="profile-follow-wrapper">
        <div class="profile-follow group">
          <router-link
            :to="{ name: 'user-followed', params: { id: user.id } }"
            class="profile-follow count"
            >{{ user.followingCounts }} 個</router-link
          >
          <router-link
            :to="{ name: 'user-followed', params: { id: user.id } }"
            class="profile-follow text"
            >跟隨中</router-link
          >
        </div>
        <div class="profile-follow group">
          <router-link
            :to="{ name: 'user-following', params: { id: user.id } }"
            class="profile-follow countt"
            >{{ user.followerCounts }} 個</router-link
          >
          <router-link
            :to="{ name: 'user-following', params: { id: user.id } }"
            class="profile-follow text"
            >跟隨者</router-link
          >
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
  methods: {
    callModal() {
      this.$store.commit("toggleProfileEditModal");
      console.log("called");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/_userProfile.scss";
</style>