<template>
  <div id="signin">
    <div class="logo">
      <img class="logo-image" src="./../assets/images/logo.svg" alt="" />
      <h2 class="logo-text">後台登入</h2>
    </div>
    <AdminLoginForm />
  </div>
</template>

<script>
import AdminLoginForm from "./../components/AdminLoginForm";

export default {
  name: "AdminSignIn",
  components: {
    AdminLoginForm,
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/_signin.scss";
</style>

