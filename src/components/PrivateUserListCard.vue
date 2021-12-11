<template>
  <div class="container">
    <router-link :to="{ name: 'tweet', params: { id: latestMessage.userId } }">
      <li class="card">
        <img :src="user.avatar" alt="" />
        <div class="card-info">
          <span class="name">{{ user.name }}</span>
          <span class="account"> @{{ user.account }}</span>
          <span class="created"> @{{ latestMessage.createdAt | fromNow }}</span>
        </div>
        <div>
          <span class="text"> {{ latestMessage.text | nameLength }}</span>
        </div>
      </li>
    </router-link>
  </div>
</template>

<script>
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";
import { fromNowFilter } from "../utils/mixins";
import { nameLengthFilter } from "./../utils/mixins";

export default {
  mixins: [fromNowFilter, nameLengthFilter],

  props: {
    latestMessage: {
      type: Object,
    },
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async fetchUser(userId) {
      try {
        const response = await usersAPI.getUser({
          userId,
        });
        const { data } = response;
        const { id, name, account, avatar } = data;
        this.user = {
          id,
          name,
          account,
          avatar,
        };
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法抓取資料",
        });
      }
    },
  },
  created() {
    const userId = this.latestMessage.userId;
    console.log(userId);
    this.fetchUser(userId);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.card {
  width: 100%;
  height: 75px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $page-divider;
  img {
    @extend %avatar-img-style;
    border: 1px solid $page-divider;
  }
  &-info {
    margin-left: 10px;
    .name {
      @extend %user-name-style;
    }
    .account {
      @extend %user-account-style;
    }
  }
}
</style>