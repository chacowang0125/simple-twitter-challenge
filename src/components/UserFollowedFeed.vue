<template>
  <div class="container">
    <div class="page-title">
      <div class="arrow">←</div>
      <div class="page-title-name">
        <div class="name">{{ currentUser.name }}</div>
        <div class="tweets">{{ currentUser.posts.length }}推文</div>
      </div>
    </div>
    <div class="page-banner">
      <router-link to="/user/followed">
        <div class="page-banner-followed active">跟隨者</div>
      </router-link>
      <router-link to="/user/following">
        <div class="page-banner-following">正在跟隨</div>
      </router-link>
    </div>
    <div class="page-list">
      <li v-for="follower in followers" :key="follower.id" class="list-card">
        <div class="list-card-avatar">
          <router-link>
            <!-- <img class="card-avatar-img" src="follower.avatar" alt=""> -->
          </router-link>
        </div>
        <div class="list-card-content">
          <div class="list-card-content-header">
            <div class="name">{{ follower.name }}</div>
            <div class="account">{{ follower.account }}</div>
            <button
              class="list-card-button following"
              v-if="follower.isFollowed"
              @click.stop.prevent="isFollowed(follower.id)"
            >
              正在跟隨
            </button>
            <button
              class="list-card-button follow"
              v-else
              @click.stop.prevent="isFollowed(follower.id)"
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
export default {
  name: "UserFollowingFeed",
  data() {
    return {
      currentRouteName: "followed",
      currentUser: {
        id: 1,
        name: "JohnDoe",
        posts: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
      followers: [
        {
          id: 1,
          name: "Apple",
          account: "@apple",
          avatar: "",
          introduction: "I am Apple.",
          isFollowed: true,
        },
        {
          id: 2,
          name: "Apple",
          account: "@apple",
          avatar: "",
          introduction: "I am Apple.",
          isFollowed: false,
        },
        {
          id: 3,
          name: "Apple",
          account: "@apple",
          avatar: "",
          introduction: "I am Apple.",
          isFollowed: true,
        },
      ],
    };
  },
  methods: {
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
  },
};
</script>