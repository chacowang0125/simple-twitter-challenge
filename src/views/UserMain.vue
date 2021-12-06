<template>
  <div class="container">
    <NavBar />
    <div class="main-container">
      <NewPostForm :user="user"/>
      <hr />
      <div class="showpostform-container">
        <ShowPostsList />
        <!-- @after-click-like="afterClickLike" 上面-->
      </div>
    </div>
    <div class="popularbar-container">
      <PopularBar />
    </div>
    <div class="modal">
      <ReplyPostModal v-show="openReplyPostModal" />
      <CreateNewTweetModal
        v-show="openCreateNewTweetModal"
        @after-add-tweet="afterAddTweet"
      />
    </div>
  </div>
</template>

<script>
import NavBar from "./../components/NavBar.vue";
import PopularBar from "./../components/PopularBar.vue";
import NewPostForm from "./../components/NewPostForm.vue";
import ShowPostsList from "./../components/ShowPostsList.vue";
import CreateNewTweetModal from "../components/CreateNewTweetModal.vue";
import ReplyPostModal from "../components/ReplyPostModal.vue";
import { mapState } from "vuex";

export default {
  name: "UserMain",
  components: {
    NavBar,
    PopularBar,
    NewPostForm,
    ShowPostsList,
    CreateNewTweetModal,
    ReplyPostModal,
  },
  data() {
    return {
    };
  },
  methods: {

    afterAddTweet() {
      this.$store.commit("toggleCreateNewTweetModal");
    },
  },
  computed: {
    ...mapState([
      "openCreateNewTweetModal",
      "openReplyPostModal",
    ]),
  },
	// created() {
	// 	this.fetchUser()
	// }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/_userMain.scss";
</style>
