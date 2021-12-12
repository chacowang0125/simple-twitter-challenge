<template>
  <div class="container">
    <Navbar />
    <div class="notification-area">
      <NotificationList />
    </div>
    <PopularBar
      :initial-followed-users="followings"
      @after-follow-click="afterFollowClick"
    />
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
import NotificationList from "../components/NotificationList.vue";
import PopularBar from "../components/PopularBar.vue";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import usersAPI from "../apis/users";

export default {
  name: "Notification",
  components: {
    Navbar,
    PopularBar,
    NotificationList,
  },
  data() {
    return {
      followings: "",
    };
  },
			methods: {
		async fetchFollowings(userId) {
      try {
        const response = await usersAPI.getFollowings(userId);
        this.followings = response.data;
				console.log(response)
      } catch (error) {
				this.isLoading = false;
        Toast.fire({
          icon: "warning",
          title: "無法取得跟隨者資料，請稍後再試",
        });
      }
    },
	
  },
	created() {
		this.fetchFollowings(this.currentUser.id)
		console.log(this.currentUser.id)
	},
	computed: {
		...mapState(['currentUser'])
	}
};

</script>

<style lang="scss" scoped>

.container {
  display: flex;
  .notification-area {
    flex: 1;
  }
}
</style>