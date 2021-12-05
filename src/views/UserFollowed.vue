<template>
  <div class="container">
      <Navbar />
    <div class="main-container">
      <UserFollowedFeed />
    </div>
      <PopularBar />
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
import PopularBar from "../components/PopularBar.vue";
import UserFollowedFeed from "../components/UserFollowedFeed.vue";

export default {
  name: "UserFollowed",
  components: {
    Navbar,
		UserFollowedFeed,
    PopularBar,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>

.container {
  display: flex;
	.main-container {
		flex: 1;

	}
}
</style>
