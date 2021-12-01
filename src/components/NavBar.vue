<template>
  <div id="side-bar">
    <div class="container">
      <ul>
        <li>
          <a href="#"
            ><img class="nav-logo" src="../assets/images/logo.svg" alt="logo"
          /></a>
        </li>
        <a href="#" active>
          <li
            class="nav-list"
            :class="{ active: currentpage === 'home' }"
            @click.stop.prevent="showPage('home')"
          >
            <img
              class="nav-icon"
              src="../assets/images/home-icon.svg"
              alt="home-page"
            />
            <span class="nav-title">首頁</span>
          </li>
        </a>
        <a href="#">
          <li
            class="nav-list"
            :class="{ active: currentpage === 'personal' }"
            @click.stop.prevent="showPage('personal')"
          >
            <img
              class="nav-icon"
              src="../assets/images/person-icon.svg"
              alt="personal-info"
            />
            <span class="nav-title">個人資料</span>
          </li>
        </a>
        <a href="#">
          <li
            class="nav-list"
            :class="{ active: currentpage === 'setting' }"
            @click.stop.prevent="showPage('setting')"
          >
            <img
              class="nav-icon"
              src="../assets/images/setting-icon.svg"
              alt="setting"
            />
            <span class="nav-title">設定</span>
          </li>
        </a>
        <a href="#">
          <li class="nav-list">
            <button class="nav-button">推文</button>
          </li>
        </a>
        <a href="">
          <li class="nav-list nav-list-logout">
            <img
              class="nav-icon"
              src="../assets/images/logout-icon.svg"
              alt="logout"
            />
            <span class="nav-title">登出</span>
          </li>
        </a>
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
    return {
      currentpage: "home",
    };
  },
  methods: {
    showPage(page) {
      this.currentpage = page;
    },
  },
};
</script>