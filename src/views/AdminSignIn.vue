<template>
  <div id="signin">
    <div class="logo">
      <img class="logo-image" src="./../assets/Icon.png" alt="" />
      <h2 class="logo-text">後台登入</h2>
    </div>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "./../components/LoginForm";

export default {
  name: "AdminSignIn",
  components: {
    LoginForm,
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/_signin.scss";
</style>

