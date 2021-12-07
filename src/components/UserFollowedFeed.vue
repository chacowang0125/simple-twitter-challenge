<template>
  <div class="container">
    <div class="page-title">
      <img class="profile-topnav-icon" src="./../assets/images/exit-icon.svg" @click.stop.prevent="routerBack"/>
      <div class="page-title-name">
        <div class="name">{{ user.name }}</div>
        <div class="tweets">{{ userTweetsCount }}推文</div>
      </div>
    </div>
    <div class="page-banner">
      <router-link
        :to="{ name: 'user-followed', params: { id: currentUser.id } }"
      >
        <div class="page-banner-followed active">跟隨者</div>
      </router-link>
      <router-link
        :to="{ name: 'user-following', params: { id: currentUser.id } }"
      >
        <div class="page-banner-following">正在跟隨</div>
      </router-link>
    </div>
    <div class="page-list">
      <li v-for="follower in followers" :key="follower.id" class="list-card">
        <div class="list-card-avatar">
          <router-link :to="{ name: 'tweet', params: { id: follower.followerId } }">
            <img :src="follower.avatar" alt="user-avatar" />
          </router-link>
        </div>
        <div class="list-card-content">
          <div class="list-card-content-header">
            <div class="name">{{ follower.name }}</div>
            <div class="account">{{ follower.account }}</div>
            <button
              class="list-card-button following"
              v-if="follower.isFollowed"
              @click.stop.prevent="isFollowed(follower.followerId)"
            >
              正在跟隨
            </button>
            <button
              class="list-card-button follow"
              v-else
              @click.stop.prevent="isFollowed(follower.followerId)"
            >
              跟隨
            </button>
          </div>
          <div class="list-card-content-description">
            {{ follower.introduction }}
          </div>
        </div>
      </li>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../assets/styles/_userFollowingFeed.scss";
</style>

<script>
import { mapState } from "vuex";
export default {
  name: "UserFollowingFeed",
  props: {
    initialFollowers: {
      type: Array,
      required: false, //
    },
    userTweetsCount: {
      type: Number, //Number
      required: false,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentRouteName: "followed",
      followers: "",
    };
  },
  methods: {
    fetchFollowers() {
      this.followers = [...this.initialFollowers]
    },
    isFollowed(id) {
      //API post
      this.followers = this.followers.map((follower) => {
        if (follower.id === id) {
          return {
            ...follower,
            isFollowed: !follower.isFollowed,
          };
        } else {
          return {
            ...follower,
          };
        }
      });
    },
    toggleTab(value) {
      this.currentRouteName = value;
    },
		routerBack() {
			this.$router.back()
		}
  },
  created() {
    this.fetchFollowers();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>