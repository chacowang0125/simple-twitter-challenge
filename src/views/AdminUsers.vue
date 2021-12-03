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

const dummyUser = {
  user: [
    {
      id: 1,
      name: "John Adams",
      account: "gang",
      avatar:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334",
      cover:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334",
      likeCounts: 12000,
      commentCounts: 15000,
      followerCounts: 16,
      followingCounts: 18,
    },
    {
      id: 1,
      name: "John Adams",
      account: "gang",
      avatar:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334",
      cover:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334",
      likeCounts: 12000,
      commentCounts: 15000,
      followerCounts: 16,
      followingCounts: 18,
    },
    {
      id: 1,
      name: "John Adams",
      account: "gang",
      avatar:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334",
      cover:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334",
      likeCounts: 12000,
      commentCounts: 15000,
      followerCounts: 16,
      followingCounts: 18,
    },
    {
      id: 1,
      name: "John Adams",
      account: "gang",
      avatar:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334",
      cover:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334",
      likeCounts: 12000,
      commentCounts: 15000,
      followerCounts: 16,
      followingCounts: 18,
    },
    {
      id: 1,
      name: "John Adams",
      account: "gang",
      avatar:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334",
      cover:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334",
      likeCounts: 12000,
      commentCounts: 15000,
      followerCounts: 16,
      followingCounts: 18,
    },
    {
      id: 1,
      name: "John Adams",
      account: "gang",
      avatar:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334",
      cover:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334",
      likeCounts: 12000,
      commentCounts: 15000,
      followerCounts: 16,
      followingCounts: 18,
    },
  ],
};

export default {
  name: "Admin",
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
    fetchUsers() {
      this.users = dummyUser.user;
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/_admin.scss";
</style>