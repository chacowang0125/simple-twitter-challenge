<template>
  <div class="container">
    <Navbar />
    <div class="private-message-list">
      <PrivateMessageList />
    </div>
    <div class="private-message-content">
      <PrivateChatMessage />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
import PrivateMessageList from "../components/PrivateMessageList.vue";
import PrivateChatMessage from "../components/PrivateChatMessage.vue";

export default {
  name: "PrivateChat",
  components: {
    Navbar,
    PrivateMessageList,
    PrivateChatMessage,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.container {
  display: flex;
  .private-message-list {
    flex: 1;
  }
  .private-message-content {
    flex: 2;
		border-left: 1px solid $page-divider;
  }
}
</style>
