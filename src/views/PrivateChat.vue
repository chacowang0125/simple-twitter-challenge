<template>
  <div class="container">
    <Navbar />
    <div class="user-list">
      <div class="title-contianer">
        <div class="title">訊息</div>
        <img src="../assets/images/mail-icon.svg" alt="" />
      </div>
      <div class="user-list-content">
        <PrivateUserListCard
          v-for="latestMessage in latestMessages"
          :key="latestMessage.userId"
          :latestMessage="latestMessage"
        />
      </div>
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
import PrivateUserListCard from "../components/PrivateUserListCard.vue";
import ChatRoomMessage from "../components/ChatRoomMessage.vue";
import { mapState } from "vuex";
import chatAPI from "./../apis/chat";

export default {
  name: "PrivateChat",
  components: {
    Navbar,
    PrivateUserListCard,
    ChatRoomMessage,
  },
  data() {
    return {
      roomName: "1",
      loginUser: [],
      contents: [],
      content: {},
      logged: {},
      latestMessages: [],
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
    // loginUser(data) {
    //   console.log(data);
    //   this.loginUser = data;
    // },
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
        id: this.$route.params,
      });
      this.fetchLatest();
    },
    async fetchLatest() {
      const data = await chatAPI.getLatest();
      console.log(data);
      this.latestMessages = data.data;
    },

    async fetchChatHistory(userId) {
      const data = await chatAPI.privateHistory({ userId });
      this.contents = data.data;
    },
    joinRoom() {
      this.$socket.emit("joinRoom", { id: this.$route.params });
      console.log("joined");
    },
    leaveRoom() {
      this.$socket.emit("leaveRoom", { id: this.$route.params });
      console.log("left");
    },
  },
  computed: {
    ...mapState(["currentUser", "chatUser"]),
  },
  created() {
    const { id } = this.$route.params;
    this.fetchChatHistory(id);
    this.joinRoom();
    this.fetchLatest();
  },
  beforeDestroy() {
    this.leaveRoom();
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
