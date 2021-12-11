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
  name: "PrivateChat",
  components: {
    Navbar,
    UserListCard,
    ChatRoomMessage,
  },
  data() {
    return {
      room: "1",
      loginUser: [],
      contents: [],
      content: {},
      logged: {},
    };
  },
  mounted() {
    this.$socket.open();
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
  },
  computed: {
    ...mapState(["currentUser", "token"]),
  },
  created() {
    this.fetchChatHistory();
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
