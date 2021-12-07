<template>
  <div class="profile-user-card">
    <div class="profile-user-img">
      <img class="profile-user-img cover" :src="user.cover" />
      <img class="profile-user-img avatar" :src="user.avatar" />
      <button
        class="btn btn-profile-edit"
        @click.prevent.stop="callModal"
        v-show="currentUser.id !== user.id"
      >
        編輯個人資料
      </button>
      <div class="btn other-user" v-show="currentUser.id === user.id">
        <img class="other-user-icon" src="../assets/images/btn-messege.svg" />
        <img class="other-user-icon" src="../assets/images/btn-noti.svg" />
        <div class="other-user-btn">
          <button
            class="other-user-btn-item following"
            v-if="user.isFollowed"
            @click.stop.prevent="isFollowed(user.id)"
          >
            正在跟隨
          </button>
          <button
            class="other-user-btn-item follow"
            v-else
            @click.stop.prevent="isFollowed(user.id)"
          >
            跟隨
          </button>
        </div>
      </div>
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
            >{{ user.followings }} 個</router-link
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
            class="profile-follow count"
            >{{ user.followers }} 個</router-link
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
import { mapState } from "vuex";
export default {
  name: "ProfileUser",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    callModal() {
      this.$store.commit("toggleProfileEditModal");
      console.log("called");
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>

<style lang="scss">
@import "../assets/styles/_userProfile.scss";
</style>