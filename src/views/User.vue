<template>
  <div class="container">
    <NavBar />
    <div id="profile">
      <UserTopNav :user="user" />
      <div id="profile-user">
        <UserProfileComponent
          :initialUser="user"
          @after-follow-click="afterFollowClick"
        />
      </div>
      <div id="stepper">
        <UserStepper />
      </div>
      <div class="router-container">
        <router-view />
      </div>
    </div>
    <div class="popularbar-container">
      <PopularBar
        :initial-top-users="topUsers"
        @after-follow-click="afterFollowClick"
      />
    </div>
    <UserEditModal
      :initialUser="user"
      :is-processing="isProcessing"
      @after-submit="handleAfterSubmit"
    />
    <div class="modal">
      <CreateNewTweetModal
        v-show="openCreateNewTweetModal"
        @after-add-tweet="afterAddTweet"
      />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import PopularBar from "../components/PopularBar.vue";
import UserTopNav from "../components/UserTopNav.vue";
import UserProfileComponent from "../components/UserProfileComponent.vue";
import UserStepper from "../components/UserStepper.vue";
import UserEditModal from "../components/UserEditModal.vue";
import CreateNewTweetModal from "../components/CreateNewTweetModal.vue";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "UserProfile",
  components: {
    NavBar,
    PopularBar,
    UserTopNav,
    UserProfileComponent,
    UserStepper,
    UserEditModal,
    CreateNewTweetModal,
  },
  data() {
    return {
      user: {
        id: -1,
        name: "",
        account: "",
        avatar: "",
        introduction: "",
        cover: "",
        followers: "",
        followings: "",
        tweetsCounts: "",
        isFollowed: "",
      },
      isProcessing: false,
      topUsers: [],
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
    this.fetchTopUsers();
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUser(id);
    next();
  },
  computed: {
    ...mapState(["openCreateNewTweetModal", "openReplyPostModal"]),
  },
  methods: {
    async fetchTopUsers() {
      try {
        const { data } = await usersAPI.getTopUsers();
        this.topUsers = data;
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法取得資料請稍後再試",
        });
      }
    },
    async handleAfterSubmit(formData) {
      try {
        console.log(formData);
        this.isProcessing = true;
        const { data } = await usersAPI.updateUserProfile({
          userId: this.user.id,
          formData,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$store.commit("toggleProfileEditModal");
        this.$router.go();
      } catch (error) {
        this.isProcessing = false;
        const { data } = error.response;
        Toast.fire({
          icon: "warning",
          title: data.message,
        });
      }
    },
    async fetchUser(userId) {
      try {
        const response = await usersAPI.getUser({
          userId,
        });
        const { data } = response;
        const {
          id,
          name,
          account,
          avatar,
          cover,
          followers,
          followings,
          introduction,
          isFollowed,
          tweetsCounts,
        } = data;
        this.user = {
          id,
          name,
          account,
          avatar,
          cover,
          followers,
          followings,
          introduction,
          isFollowed,
          tweetsCounts,
        };
      } catch (error) {
        const { data } = error.response;
        Toast.fire({
          icon: "warning",
          title: data.message,
        });
      }
    },
    afterFollowClick() {
      const { id } = this.$route.params;
      this.fetchUser(id);
      this.fetchTopUsers();
    },
    afterAddTweet() {
      this.$store.commit("toggleCreateNewTweetModal");
      this.$store.commit("toggleTweetCreated");
    },
  },
	sockets: {
    messageNotRead(data) {
			this.$store.commit("updateReadMessage",data)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
#profile {
  min-width: 600px;
  flex: 1;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  .modal {
    position: fixed;
    top: 0;
    left: 0;
  }
}
#profile {
  display: flex;
  flex-direction: column;
  .router-container {
    flex: 1;
    overflow-y: auto;
    &::-webkit-scrollbar {
      //捲軸寬度
      width: 3px;
      background-color: transparent;
      //捲軸本體顏色
      &-thumb {
        border-radius: 10px;
        background-color: $page-divider;
      }
    }
  }
}
</style>
