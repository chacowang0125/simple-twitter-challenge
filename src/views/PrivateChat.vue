<template>
  <div class="container">
    <Navbar />
    <div class="user-list">
      <div class="title-contianer">
        <div class="title">訊息</div>
        <img src="../assets/images/mail-icon.svg" alt="" />
      </div>
      <div class="user-list-content">
        <UserListCard />
      </div>
      <PrivateMessageList />
    </div>
    <div class="message-content">
      <div class="title">聊天對象</div>
      <div class="content">
        <ChatRoomMessage />
      </div>
    </div>
  </div>
</template>

<script>
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
  .title-contianer {
    @extend %page-title-style;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 22px;
      height: 22px;
    }
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
  .message-content {
    flex: 2;
    border-left: 1px solid $page-divider;
    .title {
      @extend %page-title-style;
    }
    display: flex;
    flex-direction: column;
    .content {
      flex: 1;

    }
  }
}
</style>
