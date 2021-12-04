<template>
  <div class="container">
    <div class="modal-header">
      <img src="../assets/images/close-icon.svg" alt="" />
    </div>
    <div class="modal-content">
      <div class="modal-content-tweet">
        <div class="modal-content-tweet-img">
          <img alt="" />
          <div class="line"></div>
        </div>
        <div class="modal-content-info">
          <div class="modal-content-info-name">
            <span class="name">Apple</span>
            <span>@apple</span>
            <span> • 3小時</span>
          </div>
          <div class="modal-content-info-text">
            水瓶座是公認不聽從社會規則的怪人，但事實上在他的性格上，隱藏著保守的一面。水瓶座的人頑固得不容易改變自己的意見或主張，但另一方面卻又極端討厭和別人爭執及暴力。
          </div>
          <div class="modal-content-info-creater">
            <span>回覆給</span>
            <span class="account">@apple</span>
          </div>
        </div>
      </div>
      <div class="modal-content-reply">
        <div class="modal-content-reply-img">
          <!-- <img class="page-content-img" :src="currentuser.avatar" alt=""> -->
        </div>
        <textarea
          class="mmodal-content-reply-input"
          placeholder="有什麼新鮮事？"
          v-model="inputText"
        >
        </textarea>
      </div>
      <div class="modal-content-button">
        <button :disabled="!inputText" @click.stop.prevent="handleSubmit">
          回覆
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.container {
  width: 600px;
  height: 450px;
  border: 1px solid $page-divider;
  border-radius: 14px;
  margin: 30px; //cancel
  display: flex;
  flex-direction: column;
  .modal-header {
		width: 100%;
    height: 54px;
    padding: 20px;
    border-bottom: 1px solid $page-divider;
		text-align: left;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  &-tweet {
    display: flex;
    &-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        @extend %avatar-img-style;
        border: 1px solid gray;
      }
      .line {
        // border: 1px solid gray;
        flex: 1;
        width: 2px;
        margin: 2px 0;
      }
    }
  }
  &-info {
    flex: 1;
    text-align: left;
    padding: 0 10px;
    &-name {
      @extend %user-account-style;
      .name {
        @extend %user-name-style;
        margin-right: 5px;
      }
    }
    &-text {
      padding: 5px 0;
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;
      color: $main-font-color;
    }
    &-creater {
      padding: 15px 0;
      font-weight: 500;
      font-size: 13px;
      color: $label-font-color;
      .account {
        margin-left: 5px;
        color: $main-orange;
      }
    }
  }
  &-reply {
    flex: 1;
    display: flex;
    margin: 10px 0;
    &-img {
      @extend %avatar-img-style;
      border: 1px solid $label-font-color;
    }
    textarea {
      width: 100%;

      flex: 1;
      padding: 10px;
      font-size: 18px;
      line-height: 26px;
      border: none;
      resize: none; //取消右下角三角形
    }
  }
  &-button {
    position: relative;
    width: 100%;
    height: 38px;
    button {
      @extend %button-style;
      width: 66px;
      height: 38px;
      position: absolute;
      right: 0;
    }
    &:disabled {
      opacity: 0.5;
    }
  }
}
</style>