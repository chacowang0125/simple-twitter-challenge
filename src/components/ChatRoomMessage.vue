<template>
  <div class="container">
    <div class="content">
      <div class="notice">
        <div class="notice-message">上線了</div>
      </div>
      <div class="left-message">
        <img src="" alt="" />
        <div class="left-message-area">
          <div class="left-message-area-text">左邊訊息</div>
          <div class="left-message-area-time">下午6:02</div>
        </div>
      </div>
      <div class="right-message">
        <div class="right-message-text">
          {{ this.return }}
        </div>
        <div class="right-message-time">下午6:02</div>
      </div>
    </div>
    <div class="input-area">
      <input type="text" placeholder="輸入訊息..." v-model="text" />
      <div class="send-icon" @click="send">
        <img src="../assets/images/send-icon.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_chatroommessage.scss";
</style>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      text: "",
      return: "",
      id: 5566,
      room: "public",
    };
  },
  sockets: {
    connect() {
      console.log("socket connected");
      // this.socketConnect();
      this.$socket.emit("login", this.currentUser.id);
    },
    message(data) {
      console.log("Page：" + data);
      this.return = data;
    },
  },
  methods: {
    // socketConnect() {
    //   this.$socket.emit("login", {
    //     id: this.currentUser.id,
    //   });
    // },
    send() {
      this.$socket.emit("sendMessage", {
        text: this.text,
        id: this.currentUser.id,
        room: this.room,
      });
      this.text = "";
      // this.$socket.on("message", (data) => {
      //   console.log(data);
      //   this.return = data;
      // });
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>