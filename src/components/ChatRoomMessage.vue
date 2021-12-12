<template>
  <div class="container">
    <div class="content" ref="scrollBar" id="content">
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
                {{ content.createdAt | dateToString }}
              </div>
            </div>
          </div>
        </template>
      </div>
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
  props: ["contents","logged"],
  data() {
    return {
      message: "",
    };
  },
  methods: {
    send() {
      if (!this.message.trim()) {
        return;
      }
      this.$emit("after-send-message", this.message);
      this.message = "";
      this.scrollToBottom();
    },
    scrollToBottom() {
      this.$refs.scrollBar.scrollTop = this.$refs.scrollBar.scrollHeight;
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  updated() {
    this.scrollToBottom();
  },
  filters: {
    dateToString(value) {
      const timeString = new Date(value).toLocaleTimeString("zh-TW", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return `${timeString}`;
    },
  },
};
</script>