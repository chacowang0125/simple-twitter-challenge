  <template>
  <div class="container">
    <div class="tweet-card" v-for="comment in comments" :key="comment.id">
      <div class="tweet-card-img"></div>
      <div class="tweet-card-content">
        <div class="tweet-card-content-info">
          <span class="name">{{ user.name }}</span>
          <span class="account">@{{ user.account }}</span>
          <span class="created-at">{{ comment.createdAt | fromNow }}</span>
        </div>
        <div class="tweet-card-content-reply">
          <span class="replied">回覆</span>
          <span class="account">@{{ comment.Tweet.User.account }}</span>
        </div>
        <div class="tweet-card-content-text">
          {{ comment.comment }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";

export default {
  mixins: [fromNowFilter],
  name: "UserComments",
  props: {
    comments: {
      type: Array,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_showCommentList.scss";
</style>