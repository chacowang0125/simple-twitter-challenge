<template>
  <div id="admin-navbar">
    <div class="container">
      <div class="logo">
        <a href="#"
          ><img class="nav-logo" src="../assets/images/logo.svg" alt="logo"
        /></a>
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

        <li class="nav-list nav-list-logout">
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
};
</script>

<style lang="scss">
@import "./../assets/styles/_adminNavBar.scss";
</style>