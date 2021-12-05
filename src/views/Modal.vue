<template>
  <div class="container">
    <CreateNewTweetModal />
    <ReplyPostModal />
  </div>
</template>

<script>
import CreateNewTweetModal from "./../components/CreateNewTweetModal.vue";
import ReplyPostModal from "./../components/ReplyPostModal.vue";

export default {
  components: {
    CreateNewTweetModal,
    ReplyPostModal,
  },
};
</script>
