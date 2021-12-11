<template>
  <div class="container">
    <div class="content" ref="scrollBar" id="content">
      <!-- <div v-for="message in publicHistory" :key="content.id">
        <div
          :class="[
            content.User.id === currentUser.id
              ? 'right-message'
              : 'left-message',
          ]"
        >
          <img src="" alt="" v-show="content.User.id !== currentUser.id" />
          <div class="area">
            <div class="text">
              {{ content.text }}
            </div>
            <div class="time">
              {{ content.createdAt | fromNow }}
            </div>
          </div>
        </div>
      </div> -->
      <div v-for="content in contents" :key="content.id">
        <template v-if="content.online">
          <div class="notice">
            <div class="notice-message">{{ content.online }}</div>
          </div>
        </template>
        <template v-else>
          <div
            :class="[
              content.UserId === currentUser.id
                ? 'right-message'
                : 'left-message',
            ]"
          >
            <img
              :src="content.avatar"
              alt=""
              v-show="content.UserId !== currentUser.id"
            />
            <div class="area">
              <div class="text">
                {{ content.text }}
              </div>
              <div class="time">
                {{ content.createdAt | fromNow }}
              </div>
            </div>
          </div>
        </template>
      </div>
      <!-- <div class="notice">
        <div class="notice-message">{{ this.logged }}</div>
      </div> -->
    </div>
    <div class="input-area">
      <input
        type="text"
        placeholder="輸入訊息..."
        v-model="message"
        @keyup.enter="send"
      />
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
import { fromNowFilter } from "../utils/mixins";

export default {
  mixins: [fromNowFilter],
  props: {
    contents: {
      type: Array,
    },
    logged: {
      type: String,
    },
  },
  data() {
    return {
      message: "",
    };
  },
  // sockets: {
  //   connect() {
  //     console.log("socket connected");
  //     // this.socketConnect();
  //     this.$socket.emit("login", this.currentUser.id);
  //   },
  //   message(data) {
  //     console.log("Page：" + data);
  //     this.return = data;
  //   },
  //   loginUser(data) {
  //     console.log(data);
  //     this.loginUser = data;
  //   },
  //   disconnected() {
  //     this.$socket.emit("disconnect", this.currentUser.id);
  //   },
  // },
  methods: {
    // socketConnect() {
    //   this.$socket.emit("login", {
    //     id: this.currentUser.id,
    //   });
    // },
    send() {
      if (!this.message.trim()) {
        return;
      }
      this.$emit("after-send-message", this.message);
      this.message = "";
			this.scrollToBottom()
    },
		scrollToBottom() {
			this.$refs.scrollBar.scrollTop = this.$refs.scrollBar.scrollHeight
		}
  },
  computed: {
    ...mapState(["currentUser"]),
  },
	updated() {
    this.scrollToBottom()
	}
};
</script>