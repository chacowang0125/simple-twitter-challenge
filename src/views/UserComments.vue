  <template>
  <div class="container" v-show="!isLoading">
    <div v-if="this.comments.length === 0" class="empty-message">
      使用者沒有任何回復(ノ▼Д▼)ノ
    </div>
    <UserCommentFeed
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
  </div>
</template>

<script>
import UserCommentFeed from "../components/UserCommentFeed.vue";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  name: "UserCommentsView",
  components: {
    UserCommentFeed,
  },
  data() {
    return {
      comments: [],
      isLoading: true,
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchComments(id);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchComments(id);
    next();
  },
  methods: {
    async fetchComments(userId) {
      try {
        const response = await usersAPI.getUserComments({
          userId,
        });
        const { data } = response;
        this.comments = data;
        this.isLoading = false;
      } catch (error) {
        const { data } = error.response;
        Toast.fire({
          icon: "warning",
          title: data.message,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_showCommentList.scss";
</style>