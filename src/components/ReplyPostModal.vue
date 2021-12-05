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
        <div class="modal-content-tweet">
          <div class="modal-content-tweet-img">
            <img src="https://picsum.photos/200" alt="" />
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
            <img
              class="page-content-img"
              src="https://picsum.photos/200"
              alt=""
            />
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
  </div>
</template>

<script>
export default {
  name: "ReplyPostModal",
  methods: {
    closeModal() {
      this.$store.commit("toggleReplyPostModal");
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../assets/styles/_replyPostModal.scss"
</style>