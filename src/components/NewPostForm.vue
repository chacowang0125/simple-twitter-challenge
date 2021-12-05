<template>
  <div class="container">
    <div class="page-title">首頁</div>
    <div class="page-content">
      <div class="page-content-img">
        <img class="page-content-img" :src="currentuser.avatar" alt="">
      </div>
      <textarea
        class="page-content-input"
        placeholder="有什麼新鮮事？"
        v-model="inputText"
      ></textarea>
      <div class="page-content-button">
        <button class="page-content-button" :disabled="!inputText" @click.stop.prevent="handleSubmit">
          {{ isProcessing? '推文中':'推文' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../assets/styles/_newpostform.scss";
</style>

<script>
export default {
  name: "NewPostForm",
  data() {
    return {
      currentuser: {
        id: -1,
        avatar: "https://picsum.photos/200",
      },
      inputText: "",
			isProcessing: false
    };
  },
  methods: {
    handleSubmit() {
			// this.isProcessing = true
			// API
			// if( data.status !== 'success'){
			// 	throw new Error(data.message)
			// }
			// this.inputText = ""
			// this.isProcessing = false
    }
  },
};
</script>
