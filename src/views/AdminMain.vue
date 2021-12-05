<template>
  <div id="admin-main">
    <AdminNavBar />

    <div id="tweet-list">
      <AdminTopNav />
      <AdminTweet v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
    </div>
  </div>
</template>

<script>
import AdminNavBar from "./../components/AdminNavBar";
import AdminTopNav from "./../components/AdminTopNav";
import AdminTweet from "./../components/AdminTweet";

const dummyData = {
  tweet: [
    {
      id: 1,
      description: "testtesttesttesttestteteteete",
      createdAt: "2019-07-30T16:24:55.443Z",
      User: {
        id: 4,
        name: "John Adams",
        account: "gang",
        avatar:
          "https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334",
      },
    },
  ],
};

export default {
  name: "Admin",
  components: {
    AdminNavBar,
    AdminTopNav,
    AdminTweet,
  },
  data() {
    return {
      tweets: [],
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    fetchTweets() {
      this.tweets = dummyData.tweet;
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/styles/_admin.scss";
</style>