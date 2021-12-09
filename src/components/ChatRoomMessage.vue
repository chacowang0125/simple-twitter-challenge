<template>
  <div class="container">
    <div class="title">公開聊天室</div>
    <div class="content">聊天內容</div>
    <div class="input-area">
			<input type="text" placeholder="輸入訊息..."/>
      <div class="submit-icon">
        <img src="" alt="" />
      </div>
		</div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.container {
	height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: left;
  .title {
    @extend %page-title-style;
  }
}
.content {
  flex: 1;
}

.input-area {
  height: 55px;
  border-top: 1px solid $page-divider;
  padding: 10px 20px;
	display: flex;
  input {
    width: 100%;
    height: 100%;
		padding: 15px;
		border: none;
    border-radius: 20px;
		background-color: $page-divider;
		font-size: 20px;
  }
	.submit-icon {
		border: 1px solid red;
		margin-left: 20px;
		width: 40px;
	}
}
</style>