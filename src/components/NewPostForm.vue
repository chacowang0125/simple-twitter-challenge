<template>
  <div class="container">
		<div class="page-title">首頁</div>
		<div class="page-content">
			<div class="page-content-img">
				<!-- <img class="page-content-img" src="" alt=""> -->
			</div>
			<input class="page-content-imput" type="textbox">
			<button class="page-content-button"></button>
		</div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.container {
	display: flex;
	flex-direction: column;
}
.page-title {
    @extend %page-title-style;
}
.page-content {
	border: 1px solid red;
	width: 100%;
	height: 120px;
	padding: 10px 15px;
	display: flex;
	&-img {
		width : 50px;
		height: 50px;
		border: 1px solid gray;
		border-radius: 50%;
	}
	&-input {
		width : 200px
	}
	&-button {
		border: 1px solid red;
	}
}
</style>

<script>
export default {
  name: "NewPostForm",
  data() {
		return {

		}
	},
};
</script>
