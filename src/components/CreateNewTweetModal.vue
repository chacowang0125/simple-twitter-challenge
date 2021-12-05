<template>
  <div class="modal-container">
    <div class="modal">
      <div class="modal-header">
        <img src="../assets/images/close-icon.svg" alt="" @click.stop.prevent="closeModal" />
      </div>
      <div class="modal-content">
        <div class="modal-content-img">
          <img class="page-content-img" :src="user.avatar" alt="" />
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
        avatar: "https://picsum.photos/200",
      },
      inputText: "",
    };
  },
  methods: {
    handleSubmit() {
      // this.$emit("after-add-tweet");
    },
		closeModal() {
			this.$store.commit('toggleCreateNewTweetModal')
		}
  },
};
</script>


<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.modal-container {
  width: 100vw;
  height: 100vh;
  padding: 54px;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
}
.modal {
  width: 600px;
  height: 300px;
  border: 1px solid $page-divider;
  border-radius: 14px;
  background-color: $white;
  display: flex;
  flex-direction: column;
  .modal-header {
    height: 54px;
    padding: 20px;
    border-bottom: 1px solid $page-divider;
    img {
      width: 15px;
      height: 15px;
			cursor: pointer;
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
		img {
			@extend %avatar-img-style;
		}
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
    cursor: pointer;
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