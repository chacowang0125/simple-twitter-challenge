<template>
  <div class="container">
    <div class="modal-header">
      <img src="../assets/images/close-icon.svg" alt="" />
    </div>
    <div class="modal-content">
      <div class="modal-content-img">
        <!-- <img class="page-content-img" :src="currentuser.avatar" alt=""> -->
      </div>
      <textarea
        class="modal-content-input"
        placeholder="有什麼新鮮事？"
        v-model="inputText"
      >
      </textarea>
      <div class="modal-content-button">
        <button :disabled="!inputText" @click.stop.prevent="handleSubmit">
        回覆
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateNewTweetModal",
  data() {
    return {
      user: {
        id: 1,
        name: "Chaco",
        avatar: "",
      },
      inputText: "",
    };
  },
  setup() {},
};
</script>


<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.container {
  width: 600px;
  height: 300px;
  border: 1px solid $page-divider;
  border-radius: 14px;
  margin: 30px; //cancel
  display: flex;
  flex-direction: column;
  .modal-header {
    height: 54px;
    padding: 20px;
    border-bottom: 1px solid $page-divider;
    img {
      width: 15px;
      height: 15px;
    }
  }
}
.modal-content {
  position: relative;
  width: 100%;
  padding: 15px;
  display: flex;
  flex: 1;
  &-img {
    @extend %avatar-img-style;
    border: 1px solid gray;
  }
  textarea {
    flex: 1;
    padding: 10px;
    font-size: 18px;
    line-height: 26px;
    border: none;
    resize: none; //取消右下角三角形
  }
  &-button {
    width: 66px;
    height: 100%;
    position: relative;
    button {
      @extend %button-style;
      width: 100%;
      height: 38px;
      position: absolute;
      right: 0;
      bottom: 0;
    }
    &:disabled {
      opacity: 0.5;
    }
  }
}
</style>