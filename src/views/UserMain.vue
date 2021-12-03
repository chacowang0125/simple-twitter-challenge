<template>
  <div class="container">
    <NavBar />
    <div class="main-container">
			<!-- <PostDetailCard /> -->
      <div class="newpostform-container">
        <NewPostForm />
      </div>
      <hr />
      <div class="showpostform-container">
        <ShowPostsList />
      </div>
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
// import PostDetailCard from "./../components/PostDetailCard.vue"

export default {
  name: "UserMain",
  components: {
    NavBar,
    PopularBar,
    NewPostForm,
    ShowPostsList,
		// PostDetailCard
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.container {
  display: flex;
  .main-container {
    height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    hr {
      width: 100%;
      height: 10px;
      margin: 0;
      border: 0;
      background-color: $page-divider;
    }
    .showpostform-container {
      flex: 1;
      overflow-y: auto;
      &::-webkit-scrollbar {
        //捲軸寬度
        width: 3px;
        background-color: transparent;
        //捲軸本體顏色
        &-thumb {
          border-radius: 10px;
          background-color: $page-divider;
        }
      }
    }
  }
}
</style>
