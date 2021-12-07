<template>
  <div id="admin-main">
    <AdminNavBar />

    <div id="tweet-list">
      <AdminTopNav />
      <AdminTweet />
    </div>
  </div>
</template>

<script>
import AdminNavBar from "./../components/AdminNavBar";
import AdminTopNav from "./../components/AdminTopNav";
import AdminTweet from "./../components/AdminTweet";

export default {
  name: "Admin",
  components: {
    AdminNavBar,
    AdminTopNav,
    AdminTweet,
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/_admin.scss";
</style>