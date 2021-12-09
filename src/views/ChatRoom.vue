<template>
  <div class="container">
    <Navbar />
    <div class="user-online-list">
      <UserOnlineList />
    </div>
    <div class="chat-room-message">
      <ChatRoomMessage />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
import UserOnlineList from "../components/UserOnlineList.vue";
import ChatRoomMessage from "../components/ChatRoomMessage.vue";

export default {
  name: "PrivateChat",
  components: {
    Navbar,
    UserOnlineList,
    ChatRoomMessage,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
	.user-online-list {
		flex: 1;
	}
	.chat-room-message {
		border-left: 1px solid gray;
		flex: 2;
	}
}
</style>