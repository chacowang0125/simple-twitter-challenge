<template>
  <div class="container">
    <div class="title">通知</div>
    <div class="content">通知內容</div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.container {
  display: flex;
  flex-direction: column;
	text-align: left;
	.title {
		@extend %page-title-style;
	}
}
</style>