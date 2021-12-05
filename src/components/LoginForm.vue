<template>
  <div class="container">
    <form class="form" @submit.prevent.stop="handleSubmit">
      <div class="form-row">
        <label for="email">帳號</label
        ><input
          id="email"
          name="email"
          type="text"
          v-model="account"
          required
          class="form-control"
        />
      </div>
      <div class="form-row">
        <label for="password">密碼</label
        ><input
          id="password"
          name="password"
          type="password"
          v-model="password"
          required
          class="form-control"
        />
      </div>
      <button class="btn btn-primary" type="submit" :disabled="isProcessing">
        {{ isProcessing ? "處理中..." : "登入" }}
      </button>
    </form>

    <div class="links">
      <ul class="link-list">
        <li v-show="currentRouteName === 'SignIn'">
          <router-link to="/signup" class="link-list-item text">
            註冊Alphitter
          </router-link>
        </li>
        <span class="link-list-item" v-show="currentRouteName === 'SignIn'"
          >&bull;</span
        >
        <li>
          <router-link
            to="/admin/signin"
            class="link-list-item text"
            v-if="currentRouteName === 'SignIn'"
          >
            後台登入
          </router-link>
          <router-link to="/signin" class="link-list-item text" v-else>
            前台登入
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import "./../assets/styles/_signin.scss";
</style>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";

export default {
  name: "LoginForm",
  data() {
    return {
      account: "",
      password: "",
      isProcessing: false,
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.account || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "Please enter account and password to login",
          });
          return;
        }
        this.isProcessing = true;
        const response = await authorizationAPI.signIn({
          account: this.account,
          password: this.password,
        });
        const { data } = response;

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        //判定user role是否正確登入前台後台
        // if (
        //   (data.user.role === "user" && currentRouteName === "AdminSignIn") ||
        //   (data.user.role === "admin" && currentRouteName === "sign-in")
        // ) {
        //   Toast.fire({
        //     icon: "warning",
        //     title: "帳號不存在",
        //   });
        //   this.isProcessing = false;
        //   return;
        // }
        console.log("start");
        localStorage.setItem("token", data.token);
        this.$store.commit("setCurrentUser", data.user);
        console.log("start");
        if (data.user.role === "user") {
          this.$router.push({ name: "home" });
        }
        if (data.user.role === "admin") {
          this.$router.push({ name: "AdminMain" });
        }
      } catch (error) {
        this.isProcessing = false;

        this.password = "";
        Toast.fire({
          icon: "warning",
          title: "錯誤的帳號或密碼",
        });
        console.log(error);
      }
    },
  },
};
</script>