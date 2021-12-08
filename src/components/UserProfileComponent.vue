<template>
  <div class="profile-user-card">
    <div class="profile-user-img">
      <img class="profile-user-img cover" :src="user.cover" />
      <img class="profile-user-img avatar" :src="user.avatar" />
      <button
        class="btn btn-profile-edit"
        @click.prevent.stop="callModal"
        v-show="currentUser.id === user.id"
      >
        編輯個人資料
      </button>
      <div class="btn other-user" v-show="currentUser.id !== user.id">
        <img class="other-user-icon" src="../assets/images/btn-messege.svg" />
        <img class="other-user-icon" src="../assets/images/btn-noti.svg" />
        <div class="other-user-btn">
          <button
            class="other-user-btn-item following"
            v-if="user.isFollowed"
            @click.stop.prevent="deleteFollow(user.id)"
          >
            正在跟隨
          </button>
          <button
            class="other-user-btn-item follow"
            v-else
            @click.stop.prevent="addFollow(user.id)"
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
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

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
    },
    async addFollow(userId) {
      try {
        const { data } = await usersAPI.addFollow({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.user = {
          ...this.user,
          isFollowed: 1,
        };
        Toast.fire({
          icon: "success",
          title: "成功追蹤此使用者",
        });
      } catch (err) {
        Toast.fire({
          icon: "warning",
          title: err.message,
        });
      }
    },
    async deleteFollow(userId) {
      try {
        // console.log(userId);
        const { data } = await usersAPI.deleteFollow({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.user = {
          ...this.user,
          isFollowed: 0,
        };
        Toast.fire({
          icon: "success",
          title: "成功取消追蹤此使用者",
        });
      } catch (err) {
        Toast.fire({
          icon: "warning",
          title: err.message,
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    initialUser(newValue) {
      this.user = {
        ...this.user,
        ...newValue,
      };
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/_userProfile.scss";
</style>