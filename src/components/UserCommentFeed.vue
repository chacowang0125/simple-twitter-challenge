  <template>
  <div class="tweet-card">
    <router-link
      :to="{ name: 'tweet', params: { id: comment.User.id } }"
      class="tweet-card-img"
      ><img class="tweet-card-img" :src="comment.User.avatar | emptyImage"
    /></router-link>
    <div class="tweet-card-content">
      <div class="tweet-card-content-info">
        <span class="name">{{ comment.User.name | nameLength }}</span>
        <span class="account">@{{ comment.User.account }}</span>
        <span class="created-at">{{ comment.createdAt | fromNow }}</span>
      </div>
      <router-link
        :to="{ name: 'tweets-detail', params: { id: comment.Tweet.id } }"
      >
        <div class="tweet-card-content-reply">
          <span class="replied">回覆</span>
          <span class="account">@{{ comment.Tweet.User.account }}</span>
        </div>
        <div class="tweet-card-content-text">
          {{ comment.comment }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import { emptyImageFilter } from "./../utils/mixins";
import { nameLengthFilter } from "./../utils/mixins";

export default {
  mixins: [fromNowFilter, emptyImageFilter, nameLengthFilter],
  name: "UserCommentsFeed",
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_showCommentList.scss";
</style>