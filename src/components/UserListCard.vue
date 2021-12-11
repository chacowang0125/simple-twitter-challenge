<template>
  <div class="container">
    <li class="card">
      <img :src="user.avatar" alt="" />
      <div class="card-info">
        <span class="name">{{ user.name }}</span>
        <span class="account"> @{{ user.account }}</span>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
};
</script>

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
      @extend %user-account-style;
    }
  }
}
</style>