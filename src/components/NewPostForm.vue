<template>
  <div class="container">
    <div class="page-title">首頁</div>
    <div class="page-content">
      <div class="page-content-img">
        <img :src="currentUser.avatar | emptyImage" alt="avatar-img" />
      </div>
      <textarea
        class="page-content-input"
        placeholder="有什麼新鮮事？"
        v-model="inputText"
      ></textarea>
			<span v-show="inputLengthError">字數不可超過140字</span>
      <div class="page-content-button">
        <button
          class="page-content-button"
          :disabled="inputLengthError || !inputText || isProcessing"
          @click.stop.prevent="handleSubmit"
        >
          {{ isProcessing ? "推文中" : "推文" }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../assets/styles/_newpostform.scss";
</style>

<script>
import tweetAPI from "../apis/tweet";
import { emptyImageFilter } from "../utils/mixins";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "NewPostForm",
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
				if( !this.inputText.trim()) {
          Toast.fire({
            icon: "warning",
            title: "內容不可空白",
          });
					return
        }else if ( this.inputText.length > 140) {
          Toast.fire({
            icon: "warning",
            title: "內容長度錯誤，請稍後再試",
          });
					return
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
				this.$emit("update-tweets")
      } catch (error) {
        this.isProcessing = false;
        const { data } = error.response;
        Toast.fire({
          icon: "warning",
          title: data.message,
        });
      }
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
