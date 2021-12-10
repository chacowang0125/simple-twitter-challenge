<template>
  <div class="container">
    <Navbar />
    <div class="user-list">
      <div class="title">上線使用者(2)</div>
      <div class="user-list-content">
        <UserListCard />
      </div>
    </div>
    <div class="chat-room-message">
      <div class="title">公開聊天室</div>
      <div class="content">
        <ChatRoomMessage />
      </div>
    </div>
  </div>
</template>

<script>
// const dummyChat = {
//   User:{
//     id: 100,
//     account: test,
//     name: test,
//     avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1494&q=8'
//   },
//   message: 'yooooooo',
//   createdAt: "2021-11-30T12:30:00",
// },

import Navbar from "../components/NavBar.vue";
import UserListCard from "../components/UserListCard.vue";
import ChatRoomMessage from "../components/ChatRoomMessage.vue";

export default {
  name: "PrivateChat",
  components: {
    Navbar,
    UserListCard,
    ChatRoomMessage,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.container {
  display: flex;
  .title {
    @extend %page-title-style;
  }
  .user-list {
    flex: 1;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 3px;
      background-color: transparent;
      &-thumb {
        border-radius: 10px;
        background-color: $page-divider;
      }
    }
  }
  .chat-room-message {
    border-left: 1px solid $page-divider;
    flex: 2;
    display: flex;
    flex-direction: column;
    .content {
      flex: 1;
    }
  }
}
</style>