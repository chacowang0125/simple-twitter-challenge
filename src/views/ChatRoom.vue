<template>
  <div class="chatroom-container">
    <Navbar />
    <div class="user-list">
      <div class="title">上線使用者({{ this.loginUser.length }})</div>
      <div class="user-list-content">
        <UserListCard v-for="user in loginUser" :key="user.id" :user="user" />
      </div>
    </div>
    <div class="chat-room-message">
      <div class="title">公開聊天室</div>
      <div class="content">
        <ChatRoomMessage
          :contents="contents"
          :logged="logged"
          @after-send-message="afterSendMessage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
import UserListCard from "../components/UserListCard.vue";
import ChatRoomMessage from "../components/ChatRoomMessage.vue";
import { mapState } from "vuex";
import chatAPI from "./../apis/chat";

export default {
  name: "PublicChat",
  components: {
    Navbar,
    UserListCard,
    ChatRoomMessage,
  },
  data() {
    return {
      roomName: "public",
      loginUser: [],
      contents: [],
      content: {},
      logged: {},
    };
  },
  sockets: {
    connect() {
      console.log("socket connected");
    },
    message(data) {
      this.content = data;
      this.contents.push(this.content);
    },
    loginUser(data) {
      this.loginUser = data;
    },
    loginStatus(data) {
      this.logged = data;
      this.contents.push({ online: data });
    },
		messageNotRead(data) {
			this.$store.commit("updateReadMessage",data)
    },
  },
  mounted() {
    this.$socket.open();
  },
  methods: {
    afterSendMessage(text) {
      this.$socket.emit("sendMessage", {
        text: text,
        id: this.currentUser.id,
        roomName: this.roomName,
      });
    },
    async fetchChatHistory() {
      const data = await chatAPI.publicHistory();
      this.contents = data.data;
    },
    joinRoom() {
      this.$socket.emit("joinRoom", { roomName: this.roomName });
      console.log("joined");
    },
    leaveRoom() {
      this.$socket.emit("leaveRoom", { roomName: this.roomName });
      console.log("left");
    },
  },
  computed: {
    ...mapState(["currentUser", "token"]),
  },
  created() {
    this.fetchChatHistory();
    this.joinRoom();
  },
  beforeDestroy() {
    this.leaveRoom();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.chatroom-container {
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