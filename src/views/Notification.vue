<template>
  <div class="container">
    <Navbar />
    <div class="notification-area">
      <NotificationList />
    </div>
    <PopularBar
      :initial-followed-users="followedUsers"
      @after-follow-click="afterFollowClick"
    />
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
import NotificationList from "../components/NotificationList.vue";
import PopularBar from "../components/PopularBar.vue";
import { mapState } from "vuex";
// import { Toast } from "../utils/helpers";
// import usersAPI from "../apis/users";

export default {
  name: "Notification",
  components: {
    Navbar,
    PopularBar,
    NotificationList,
  },
  data() {
    return {
      followedUsers: [],
    };
  },
  methods: {
    // async fetchTopUsers() {
  //     try {
  //       const { data } = await usersAPI.getTopUsers();
  //       this.topUsers = data;
  //     } catch (error) {
  //       Toast.fire({
  //         icon: "warning",
  //         title: "無法取得資料請稍後再試",
  //       });
  //     }
  //   },
  //   afterFollowClick() {
  //     this.fetchTopUsers();
  //   },
  // },
  // created() {
  //   this.fetchTopUsers();
  },
	sockets: {
    messageNotRead(data) {
			this.$store.commit("updateReadMessage",data)
    },
		privateMessage() {
			this.messageNotReadInit();
		}
  },
	computed: {
    ...mapState(["updateReadMessage"]),
  },
	mounted() {
    this.$socket.open();
  },
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