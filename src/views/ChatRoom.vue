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
      room: "public",
      loginUser: [],
      contents: [],
      content: {},
      logged: {},
    };
  },

  sockets: {
    connect() {
      console.log("socket connected");
      // this.socketConnect();
      this.$socket.emit("login");
    },
    message(data) {
      this.content = data;
      this.contents.push(this.content);
    },
    loginUser(data) {
      console.log(data);
      this.loginUser = data;
    },
    loginStatus(data) {
      this.logged = data;
      this.contents.push({ online: data });
    },

    // disconnected() {
    //   this.$socket.emit("disconnect", this.currentUser.id);
    // },
  },
  methods: {
    afterSendMessage(text) {
      this.$socket.emit("sendMessage", {
        text: text,
        id: this.currentUser.id,
        room: this.room,
      });
    },
    async fetchChatHistory() {
      const data = await chatAPI.publicHistory();
      this.contents = data.data;
    },
			joinRoom() {
			this.$socket.emit("joinRoom",{ room : this.room })
		}
  },
  computed: {
    ...mapState(["currentUser", "token"]),
  },
  created() {
    this.fetchChatHistory();
		this.joinRoom()
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.chatroom-container {
  display: flex;
  // border: 5px solid green;
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