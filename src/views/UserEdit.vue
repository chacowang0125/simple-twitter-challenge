<template>
  <div class="container py-5">
    <div class="side">
      <NavBar />
    </div>
    <div class="main">
      <UserForm />
    </div>
		<div class="modal" >
      <CreateNewTweetModal v-show="openCreateNewTweetModal" @after-add-tweet="afterAddTweet" />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import UserForm from "../components/UserForm.vue";
import CreateNewTweetModal from "../components/CreateNewTweetModal.vue";
import { mapState } from "vuex";

export default {
  name: "UserEdit",
  components: {
    NavBar,
    UserForm,
		CreateNewTweetModal
  },
	computed: {
    ...mapState(["openCreateNewTweetModal"]),
  },

};
</script>
<style scoped>
.container {
  display: flex;
}
.main {
	flex: 1;
}
.modal {
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
