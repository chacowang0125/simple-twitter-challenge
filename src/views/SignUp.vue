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
@import "../assets/styles/_variables.scss";

.container {
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: 40px;
    height: 40px;
  }
  .signup-title {
    font-size: 23px;
    font-weight: 700;
    color: $main-font-color;
    margin: 25px 0;
  }
}

.form-group {
  position: relative;
  label {
    position: absolute;
    top: 18px;
    left: 20px;
    font-weight: 500;
    font-size: 14px;
    color: $input-bottom-color;
  }
  input {
    width: 540px;
    height: 52px;
    margin: 15px;
    border: none;
    border-bottom: 2px solid $input-bottom-color;
    border-radius: 4px 4px 0px 0px;
    background-color: $input-background-color;
    font-size: 20px;
    padding: 1.75rem 0rem 0.5rem 10px;
    &:focus {
      border-bottom: 2px solid #0099ff; //改成變數
    }
    &:hover {
      box-shadow: 0 0 5px #ccc;
    }
  }
}

.button-wrapper {
  height: 46px;
  margin: 20px;
  .form-button {
    width: 100%;
    height: 100%;
    @extend %button-style;
    border-radius: 50px;
  }
  .cancel-button {
    margin: 20px;
    font-weight: 700;
    font-size: 18px;
    color: #0099ff; //改成變數
    text-decoration: underline;
  }
}
</style>