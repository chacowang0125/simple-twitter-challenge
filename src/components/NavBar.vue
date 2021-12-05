<template>
  <div id="side-bar">
    <div class="container">
      <ul>
        <li>
          <router-link to="/tweets"
            ><img class="nav-logo" src="../assets/images/logo.svg" alt="logo"
          /></router-link>
        </li>
        <li class="nav-list" :class="{ active: currentRouteName === 'tweets' }">
          <router-link to="/tweets" class="nav-link">
            <img
              class="nav-icon"
              src="../assets/images/home-icon.svg"
              alt="home-page"
            />
            <span class="nav-title">首頁</span>
          </router-link>
        </li>
        <li
          class="nav-list"
          :class="{ active: currentRouteName === 'user-edit' }"
        >
          <!-- link user tweet -->
          <router-link to="/user/edit" class="nav-link">
            <img
              class="nav-icon"
              src="../assets/images/person-icon.svg"
              alt="personal-info"
            />
            <span class="nav-title">個人資料</span>
          </router-link>
        </li>
        <li
          class="nav-list"
          :class="{ active: currentRouteName === 'user-tweet' }"
        >
          <router-link to="/user/edit" class="nav-link">
            <img
              class="nav-icon"
              src="../assets/images/setting-icon.svg"
              alt="setting"
            />
            <span class="nav-title">設定</span>
          </router-link>
        </li>
        <li class="nav-list">
          <a href="#">
            <button class="nav-button" @click="opencreateNewTweetModal">推文</button>
          </a>
        </li>
        <li class="nav-list nav-list-logout">
          <rouer-link to="/tweets" class="nav-link">
            <img
              class="nav-icon"
              src="../assets/images/logout-icon.svg"
              alt="logout"
            />
            <span class="nav-title">登出</span>
          </rouer-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import "./../assets/styles/_navbar.scss";
</style>

<script>
//如果把a標籤放在li裏面，上面會有空白，放裡面還是外面？
export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {
    showPage(page) {
      this.currentpage = page;
    },
		opencreateNewTweetModal() {
			this.$store.commit('toggleCreateNewTweetModal')
		}
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>