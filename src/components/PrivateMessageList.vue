<template>
  <div class="container">
    <div class="title">訊息</div>
    <div class="content">訊息列表</div>
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
  .content {
    flex: 1;
  }
}
</style>