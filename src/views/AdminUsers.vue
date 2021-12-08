<template>
  <div id="admin-main">
    <AdminNavBar />

    <div id="tweet-list">
      <AdminTopNav />
      <div class="admin-user">
        <AdminUser v-for="user in users" :key="user.id" :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import AdminNavBar from "./../components/AdminNavBar";
import AdminTopNav from "./../components/AdminTopNav";
import AdminUser from "./../components/AdminUser";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  name: "AdminUsers",
  components: {
    AdminNavBar,
    AdminTopNav,
    AdminUser,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await adminAPI.getAllUsers();
        const { data } = response;
        this.users = data;
      } catch (error) {
        const { data } = error.response;
        Toast.fire({
          icon: "warning",
          title: data.message,
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/_adminUser.scss";
</style>