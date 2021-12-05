<template>
  <div class="container">
    <div v-for="user in users" :key="user.id" class="tweet-card" >
      <div class="tweet-card-img">
        <img :src="user.avatar" alt="" />
      </div>
      <div class="tweet-card-content">
        <div class="tweet-card-content-info">
          <span class="name">{{ user.name }}</span>
          <span class="account">{{ user.account }}</span>
          <span class="created-at">{{ user.tweet.createdAt }}</span>
        </div>
        <div class="tweet-card-content-text" @click.stop.prevent="openReplyPostModal(user.tweet.id)">
          {{ user.tweet.description }}
        </div>
        <div class="tweet-card-content-reply">
          <a href="#">
            <div class="content-reply">
              <img
                class="content-reply-icon"
                src="./../assets/images/comment-icon.svg"
              />
              <span class="content-reply-number">{{
                user.tweet.commentCounts
              }}</span>
            </div>
          </a>
          <a href="#">
            <div class="content-reply">
              <img
                class="content-reply-icon"
                src="./../assets/images/like-icon.svg"
              />
              <span class="content-reply-number">{{
                user.tweet.likeCounts
              }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_showpostslist.scss";
</style>

<script>
const dummyData = {
  users: [
    {
      id: 1,
      name: "Apple",
      account: "@apple",
      avatar: "https://picsum.photos/200",
      tweet: {
        id: 1,
        description:
          "水瓶座的人頗富知性，且具有銳利的觀察力、推測能力、以及富有冒險的開拓精神。求知慾逐漸加強後，會對任何事物都深入去思考，對於社會種種的不平等以及矛盾現象，總產生懷疑的態度或不平之心，而逐漸傾向反體制的思想。",
        createdAt: "3小時",
        commentCounts: 15,
        likeCounts: 20,
      },
    },
    {
      id: 2,
      name: "Banana",
      account: "@banana",
      avatar: "https://picsum.photos/200",
      tweet: {
        id: 1,
        description:
          "射手座的人是忠心的、大方而無拘無束，精力充沛，好爭論，脾氣急躁，對權位有野心，對受磨難及壓迫的人有慈悲的心腸。",
        createdAt: "5小時",
        commentCounts: 11,
        likeCounts: 43,
      },
    },
    {
      id: 3,
      name: "Cathy",
      account: "@cathy",
      avatar: "https://picsum.photos/200",
      tweet: {
        id: 1,
        description:
          "神經質、健忘、多愁善感、想像豐富、自欺欺人等等都是雙魚座的形像詞。",
        createdAt: "10小時",
        commentCounts: 32,
        likeCounts: 13,
      },
    },
    {
      id: 4,
      name: "Cathy",
      account: "@cathy",
      avatar: "https://picsum.photos/200",
      tweet: {
        id: 1,
        description:
          "神經質、健忘、多愁善感、想像豐富、自欺欺人等等都是雙魚座的形像詞。",
        createdAt: "10小時",
        commentCounts: 32,
        likeCounts: 13,
      },
    },
    {
      id: 5,
      name: "Cathy",
      account: "@cathy",
      avatar: "https://picsum.photos/200",
      tweet: {
        id: 1,
        description:
          "神經質、健忘、多愁善感、想像豐富、自欺欺人等等都是雙魚座的形像詞。",
        createdAt: "10小時",
        commentCounts: 32,
        likeCounts: 13,
      },
    },
    {
      id: 6,
      name: "Cathy",
      account: "@cathy",
      avatar: "https://picsum.photos/200",
      tweet: {
        id: 1,
        description:
          "神經質、健忘、多愁善感、想像豐富、自欺欺人等等都是雙魚座的形像詞。",
        createdAt: "10小時",
        commentCounts: 32,
        likeCounts: 13,
      },
    },
    {
      id: 7,
      name: "Cathy",
      account: "@cathy",
      avatar: "https://picsum.photos/200",
      tweet: {
        id: 1,
        description:
          "神經質、健忘、多愁善感、想像豐富、自欺欺人等等都是雙魚座的形像詞。",
        createdAt: "10小時",
        commentCounts: 32,
        likeCounts: 13,
      },
    },
    {
      id: 8,
      name: "Cathy",
      account: "@cathy",
      avatar: "https://picsum.photos/200",
      tweet: {
        id: 1,
        description:
          "神經質、健忘、多愁善感、想像豐富、自欺欺人等等都是雙魚座的形像詞。",
        createdAt: "10小時",
        commentCounts: 32,
        likeCounts: 13,
      },
    },
  ],
};
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    fetchUser() {
      this.users = dummyData.users;
    },
		openReplyPostModal(id) {
			console.log(id)
			this.$store.commit('toggleReplyPostModal')
		}
  },
  created() {
    this.fetchUser();
  },
};
</script>
