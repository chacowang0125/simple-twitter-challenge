<template>
  <div class="container">
    <div class="page-title">首頁</div>
    <div class="page-content">
      <div class="page-content-img">
        <img class="page-content-img" :src="currentUser.avatar" alt="" />
      </div>
      <textarea
        class="page-content-input"
        placeholder="有什麼新鮮事？"
        v-model="inputText"
      ></textarea>
      <div class="page-content-button">
        <button
          class="page-content-button"
          :disabled="!inputText"
          @click.stop.prevent="handleSubmit"
        >
          <!-- disabled isProcessing= true -->
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
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "NewPostForm",
  data() {
    return {
      inputText: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const newTweet = {
          userId: this.currentUser.id,
          description: this.inputText,
        };
        this.isProcessing = true;
        const { data } = await tweetAPI.addNewTweet({ newTweet });
        console.log(data);

        if(data.status !== "success") {
          Toast.fire({
            icon: "warning",
            title: data.message,
          });
					return
        }
        console.log(data.message);
        Toast.fire({
          icon: "success",
          title: "推文發送成功",
        });
        this.inputText = "";
        this.isProcessing = false;
      } catch {
        this.isProcessing = false;
        Toast.fire({
          icon: "warning",
          title: "無法新增推文，請稍後再試",
        });
      }
      // this.isProcessing = true
      // API
      // if( data.status !== 'success'){
      // 	throw new Error(data.message)
      // }
      // this.inputText = ""
      // this.isProcessing = false
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>
