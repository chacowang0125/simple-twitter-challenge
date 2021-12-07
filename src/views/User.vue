<template>
  <div class="container">
    <NavBar />
    <div id="profile">
      <UserTopNav />
      <div id="profile-user">
        <UserProfileComponent :user="user" />
      </div>
      <div id="stepper">
        <UserStepper />
      </div>
      <router-view />
    </div>
    <div class="popularbar-container">
      <PopularBar />
    </div>
    <UserEditModal
      :initialUser="user"
      :is-processing="isProcessing"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
// import { Toast } from "./../utils/helpers";
import NavBar from "../components/NavBar.vue";
import PopularBar from "../components/PopularBar.vue";
import UserTopNav from "../components/UserTopNav.vue";
import UserProfileComponent from "../components/UserProfileComponent.vue";
import UserStepper from "../components/UserStepper.vue";
import UserEditModal from "../components/UserEditModal.vue";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  name: "UserProfile",
  components: {
    NavBar,
    PopularBar,
    UserTopNav,
    UserProfileComponent,
    UserStepper,
    UserEditModal,
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
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUser(id);
    next();
  },
  methods: {
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
        // this.$router.push({ name: "tweet", params: { id: this.user.id } });
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
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者，請稍後再試",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
}
</style>
