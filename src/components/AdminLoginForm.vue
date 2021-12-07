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
        <li>
          <router-link to="/signin" class="link-list-item text">
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
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  name: "AdminLoginForm",
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
        const response = await adminAPI.adminSignIn({
          account: this.account,
          password: this.password,
        });

        const { data } = response;
        localStorage.setItem("token", data.token);
        this.$store.commit("setCurrentUser", data.user);
        this.$store.commit("setAdmin");

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$router.push({ name: "AdminMain" });
      } catch (error) {
        const { data } = error.response;
        this.isProcessing = false;
        this.password = "";
        Toast.fire({
          icon: "warning",
          title: data.message,
        });
      }
    },
  },
};
</script>