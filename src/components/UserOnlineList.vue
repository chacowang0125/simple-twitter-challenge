<template>
	<div class="container">
    <div class="title">上線使用者(2)</div>
    <div class="content">聊天內容</div>
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