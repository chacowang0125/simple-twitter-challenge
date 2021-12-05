<template>
  <div class="container">
      <Navbar />
    <div class="main-container">
      <UserFollowingFeed />
    </div>
      <PopularBar />
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
import PopularBar from "../components/PopularBar.vue";
import UserFollowingFeed from "../components/UserFollowingFeed.vue"

export default {
  name: "UserFollowing",
  components: {
    Navbar,
    UserFollowingFeed,
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