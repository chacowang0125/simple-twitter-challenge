<template>
  <div class="mescontainer" @click="setChatUser(user.id)">
    <li class="card">
      <img :src="user.avatar" alt="" />
      <div class="card-content">
        <div class="card-content-info">
          <span class="name">{{ user.name }}</span>
          <span class="account"> @{{ user.account }}</span>
          <span class="created">
            {{ latestMessage.createdAt | fromNow }}
          </span>
        </div>
        <div>
          <span class="card-content-text">
            {{ latestMessage.text | nameLength }}</span
          >
        </div>
      </div>
    </li>
  </div>
</template>

<script>
import usersAPI from "../apis/users";
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
      userChatting: "",
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
        this.userChatting = name;
      } catch (error) {
        console.log(error);
      }
    },
    setChatUser(id) {
      this.$store.commit("setChatUser", this.latestMessage.userId);
      this.$emit("after-chat-click", id, this.userChatting);
      console.log(id);
      console.log(this.userChatting, "!!!");
    },
  },
  created() {
    const userId = this.latestMessage.userId;
    this.fetchUser(userId);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.mescontainer {
  display: flex;
  flex-direction: column-reverse;
}
.card {
  width: 100%;
  height: 75px;
  padding: 10px 15px;
  display: flex;
  border-bottom: 1px solid $page-divider;
  text-align: left;
  cursor: pointer;
  img {
    @extend %avatar-img-style;
  }
  .card-content {
    margin-left: 10px;
    flex: 1;
    &-info {
      position: relative;
      .name {
        @extend %user-name-style;
      }
      .account {
        @extend %user-account-style;
        margin-left: 5px;
      }
      .created {
        position: absolute;
        right: 0;
        @extend %user-account-style;
      }
    }
    &-text {
      @extend %user-account-style;
    }
  }
  &:hover {
    transform: scale(1.02);
  }
}
</style>