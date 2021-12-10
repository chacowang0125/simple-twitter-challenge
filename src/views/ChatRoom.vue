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