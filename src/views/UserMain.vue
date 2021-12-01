<template>
  <div class="container">
    <NavBar />
    <div class="main-container">
      <NewPostForm />
      <hr />
      <ShowPostsList />
    </div>
    <div class="popularbar-container">
      <PopularBar />
    </div>
  </div>
</template>

<script>
import NavBar from "./../components/NavBar.vue";
import PopularBar from "./../components/PopularBar.vue";
import NewPostForm from "./../components/NewPostForm.vue";
import ShowPostsList from "./../components/ShowPostsList.vue";
export default {
  name: "UserMain",
  components: {
    NavBar,
    PopularBar,
    NewPostForm,
    ShowPostsList,
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.container {
  // position: relative;
  display: flex;
  .main-container {
    flex: 1;
    hr {
      width: 100%;
      height: 10px;
			margin: 0;
      border: 0;
      background-color: $page-divider;
    }
  }
}
</style>
