<template>
  <div class="modal-container">
    <div class="modal">
      <div class="modal-header">
        <img
          src="../assets/images/close-icon.svg"
          alt=""
          @click.stop.prevent="closeModal"
        />
      </div>
      <div class="modal-content">
        <div class="modal-content-img">
          <img
            class="page-content-img"
            :src="currentUser.avatar | emptyImage"
            alt=""
          />
        </div>
        <textarea
          class="modal-content-input"
          placeholder="有什麼新鮮事？"
          v-model="inputText"
        >
        </textarea>
        <span v-show="inputLengthError">字數不可超過140字</span>
        <div class="modal-content-button">
          <button
            :disabled="inputLengthError || !inputText || isProcessing"
            @click.stop.prevent="handleSubmit"
          >
            {{ isProcessing ? "推文中" : "推文" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import tweetAPI from "../apis/tweet";
import { Toast } from "../utils/helpers";
import { emptyImageFilter } from "../utils/mixins";

export default {
  name: "CreateNewTweetModal",
  mixins: [emptyImageFilter],
  data() {
    return {
      inputText: "",
      isProcessing: false,
      inputLengthError: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        //前端錯誤訊息提示
        if (!this.inputText || this.inputText.length > 140) {
          Toast.fire({
            icon: "warning",
            title: "內容長度錯誤，請稍後再試",
          });
        }
        //前端驗證內容長度後送後端
        this.isProcessing = true;
        const newTweet = {
          userId: this.currentUser.id,
          description: this.inputText,
        };

        const { data } = await tweetAPI.addNewTweet({ newTweet });

        if (data.status !== "success") throw new Error(data.message);
        Toast.fire({
          icon: "success",
          title: "推文發送成功",
        });

        this.inputText = "";
        this.isProcessing = false;
        this.$emit("after-add-tweet");
      } catch (error) {
        this.isProcessing = false;
        const { data } = error.response;
        Toast.fire({
          icon: "warning",
          title: data.message,
        });
      }
    },
    closeModal() {
      this.$store.commit("toggleCreateNewTweetModal");
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    inputText: function () {
      if (this.inputText.length > 140) {
        this.inputLengthError = true;
      } else {
        this.inputLengthError = false;
      }
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../assets/styles/_createNewTweetModal.scss";
</style>