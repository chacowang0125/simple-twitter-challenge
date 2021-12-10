<template>
  <div class="container">
      <li class="card">
        <img src="" alt="" />
        <div class="card-info">
          <span class="name">Apple</span>
          <span class="account"> @apple</span>
        </div>
      </li>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
    .card {
			width: 100%;
      height: 75px;
      padding: 10px 15px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid $page-divider;
      img {
        @extend %avatar-img-style;
        border: 1px solid $page-divider;
      }
      &-info {
        margin-left: 10px;
        .name {
          @extend %user-name-style;
        }
				.account {
					@extend %user-account-style
				}
      }
    }
</style>