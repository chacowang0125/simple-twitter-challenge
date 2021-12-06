<template>
  <div class="container">
    <div>
      <img class="logo" src="../assets/images/logo.svg" alt="logo" />
    </div>
    <div class="signup-title">建立你的帳號</div>
    <div class="page-content">
      <form action="post">
        <div class="form-group">
          <label for="account">帳號</label>
          <input
            type="text"
            id="account"
            name="account"
            v-model.trim="user.account"
            required
          />
        </div>
        <div class="form-group">
          <label for="name">名稱</label>
          <input
            type="text"
            id="name"
            name="name"
            v-model.trim="user.name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            v-model.trim="user.email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">密碼</label>
          <input
            type="password"
            id="password"
            name="password"
            v-model.trim="user.password"
            required
          />
        </div>
        <div class="form-group">
          <label for="confirmed-password">密碼確認</label>
          <input
            type="password"
            id="confirmed-password"
            name="confirmed-password"
            v-model.trim="user.confirmedPassword"
            required
          />
        </div>
      </form>
      <div class="button-wrapper">
        <button class="form-button" @click.stop.prevent="handleSubmit">
          註冊
        </button>
        <router-link to="/signin">
          <div class="cancel-button">取消</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  data() {
    return {
      user: {
        id: -1,
        name: "",
        account: "",
        email: "",
        password: "",
        confirmedPassword: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      //api post data
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_signup.scss";
</style>