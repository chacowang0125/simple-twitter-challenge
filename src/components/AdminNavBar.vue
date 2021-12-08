<template>
  <div id="admin-navbar">
    <div class="container">
      <div class="logo">
        <router-link to="/admin/main" class="nav-link"
          ><img class="nav-logo" src="../assets/images/logo.svg" alt="logo"
        /></router-link>
      </div>
      <ul>
        <li
          class="nav-list"
          :class="{ active: currentRouteName === 'AdminMain' }"
        >
          <router-link to="/admin/main" class="nav-link">
            <img
              class="nav-icon"
              src="../assets/images/home-icon.svg"
              alt="admin-main"
            />
            <span class="nav-title">推文清單</span>
          </router-link>
        </li>
        <li
          class="nav-list"
          :class="{ active: currentRouteName === 'AdminUsers' }"
        >
          <router-link to="/admin/users" class="nav-link">
            <img
              class="nav-icon"
              src="../assets/images/person-icon.svg"
              alt="personal-info"
            />
            <span class="nav-title">使用者列表</span>
          </router-link>
        </li>

        <li class="nav-list nav-list-logout" @click.stop.prevent="logout">
          <div class="nav-link">
            <img
              class="nav-icon"
              src="../assets/images/logout-icon.svg"
              alt="logout"
            />
            <span class="nav-title">登出</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminNav",
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    logout() {
      this.$store.commit("revokeAuthentication");
      this.$router.go();
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/_adminNavBar.scss";
</style>