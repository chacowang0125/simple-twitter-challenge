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
      <div
        class="page-banner-followed"
        :class="{ active: currentRouteName === 'followed' }"
        @click.stop.prevent="toggleTab('followed')"
      >
        跟隨者
      </div>
      <div
        class="page-banner-following"
        :class="{ active: currentRouteName === 'following' }"
        @click.stop.prevent="toggleTab('following')"
      >
        正在跟隨
      </div>
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
@import "./../assets/styles/_variables.scss";
.container {
  display: flex;
  flex-direction: column;
}
.page-title {
  @extend %page-title-style;
  border-bottom: none;
  display: flex;
  align-items: center;
  &-name {
    font-weight: 900;
    margin-left: 30px;
    .tweets {
      @extend %label-style;
      line-height: 13px;
    }
  }
}
.page-banner {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid $page-divider;
  &-followed,
  &-following {
    padding: 14px 44px;
    @extend %user-account-style;
    font-weight: 700;
    cursor: pointer;
    &.active {
      color: $main-orange;
      border-bottom: 2px solid $main-orange;
    }
  }
}
.page-list {
  flex: 1;
  &::-webkit-scrollbar {
    width: 3px;
    background-color: transparent;
    &-thumb {
      border-radius: 10px;
      background-color: $page-divider;
    }
  }
}
.list-card {
  border-bottom: 1px solid $page-divider;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  &-avatar {
    border: 1px solid gray;
    @extend %avatar-img-style;
  }
  &-content {
    flex: 1;
    text-align: left;
    margin-left: 10px;
    position: relative;
    &-header {
      .name {
        @extend %user-name-style;
      }
      .account {
        @extend %user-account-style;
      }
      button {
        position: absolute;
        top: 0px;
        right: 0px;
        border: 1px solid $main-orange;
        border-radius: 100px;
        height: 25px;
        font-weight: bold;
        font-size: 15px;
        &.follow {
          width: 60px;
          color: $main-orange;
        }
        &.following {
          width: 90px;
          color: #fff;
          background-color: $main-orange;
        }
      }
    }
    &-description {
      @extend %input-style;
    }
  }
}
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
