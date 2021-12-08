<template>
  <div class="admin-user-card">
    <div class="admin-user-img">
      <img class="admin-user-img cover" :src="user.cover | emptyCoverImage" />
      <img class="admin-user-img avatar" :src="user.avatar" />
    </div>
    <div class="admin-user-content">
      <div class="admin-user-info">
        <span class="admin-user-info name">{{ user.name }}</span>
        <span class="admin-user-info detail">@{{ user.account }}</span>
      </div>
      <div class="admin-user-data-wrapper">
        <div class="admin-user-data group">
          <img
            class="admin-user-data icon"
            src="./../assets/images/comment-icon.svg"
          />
          <span class="admin-user-data number">{{
            user.commentCounts | formatNumber
          }}</span>
        </div>
        <div class="admin-user-data group">
          <img
            class="admin-user-data icon"
            src="./../assets/images/like-icon.svg"
          />
          <span class="admin-user-data number">{{
            user.likeCounts | formatNumber
          }}</span>
        </div>
      </div>
      <div class="admin-follow-wrapper">
        <div class="admin-follow group">
          <span class="admin-follow count">{{ user.followings }} 個</span>
          <span class="admin-follow text">跟隨中</span>
        </div>
        <div class="admin-follow group">
          <span class="admin-follow count">{{ user.followers }} 位</span>
          <span class="admin-follow text">跟隨者</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatNumber } from "./../utils/mixins";
import { emptyCoverFilter } from "./../utils/mixins";

export default {
  mixins: [formatNumber, emptyCoverFilter],
  name: "AdminUserList",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/_adminUser.scss";
</style>