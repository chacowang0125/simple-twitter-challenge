<template>
  <div class="container py-5">
    <div class="side">
      <NavBar />
    </div>
    <div class="main">
      <UserForm />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import UserForm from "../components/UserForm.vue";

export default {
  name: "UserEdit",
  components: {
    NavBar,
    UserForm,
  },
};
</script>
<style scoped>
.container {
  display: flex;
}
.main {
	flex: 1;
}
</style>
