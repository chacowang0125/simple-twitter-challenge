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
      console.log(this.inputText);
      // this.$emit("after-submit-add-tweet", inputText);
    },
    closeModal() {
      this.$store.commit("toggleCreateNewTweetModal");
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../assets/styles/_createNewTweetModal.scss";
</style>