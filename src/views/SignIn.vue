<template>
  <div id="signin">
    <div class="logo">
      <img class="logo-image" src="./../assets/images/logo.svg" alt="" />
      <h2 class="logo-text">登入 Alphitter</h2>
    </div>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "./../components/LoginForm";

export default {
  name: "SignIn",
  components: {
    LoginForm,
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/_signin.scss";
</style>
