<template>
  <div class="container">
    <div class="title">通知</div>
    <li class="card">
      <img src="" alt="" />
      <div class="card-notice">Apple有新的回覆</div>
      <div class="card-message">apple回覆了一對訊息apple回覆了一對訊息apple回覆了一對訊息apple回覆了一對訊息apple回覆了一對訊息apple回覆了一對訊息apple回覆了一對訊息apple回覆了一對訊息apple回覆了一對訊息apple回覆了一對訊息</div>
    </li>
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
  .card {
    padding: 10px 15px;
    border-bottom: 1px solid $page-divider;
    img {
			margin-bottom: 5px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
			border: 1px solid gray;
    }
		&-notice {
			margin-bottom: 10px;
			@extend %user-name-style;
			font-weight: 500;
		}
		&-message {
			@extend %user-account-style;
			line-height: 22px;
		}
  }
}
</style>