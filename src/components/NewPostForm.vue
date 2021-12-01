<template>
  <div class="container">
    <div class="page-title">首頁</div>
    <div class="page-content">
      <div class="page-content-img">
        <!-- <img class="page-content-img" :src="currentuser.avatar" alt=""> -->
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
@import "../assets/styles/_variables.scss";
.container {
  display: flex;
  flex-direction: column;
}
.page-title {
  @extend %page-title-style;
}
.page-content {
  width: 100%;
  height: 120px;
  padding: 10px 15px;
  display: flex;
  &-img {
    width: 50px;
    height: 50px;
    border: 1px solid gray;
    border-radius: 50%;
  }
  textarea {
    flex: 1;
    padding: 10px;
    font-size: 18px;
    line-height: 26px;
    border: none;
    resize: none; //取消右下角三角形
  }
  textarea::-webkit-input-placeholder {
    font-size: 18px;
    color: #9197a3;
    font-weight: 700;
  }
  &-button {
    position: relative;
    width: 66px;
    button {
      position: absolute;
      right: 0;
      bottom: 0;
      height: 38px;
      @extend %button-style;
			&:disabled {
				opacity: 0.5;
			}
    }
  }
}
</style>

<script>
export default {
  name: "NewPostForm",
  data() {
    return {
      currentuser: {
        id: -1,
        avatar: "",
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
