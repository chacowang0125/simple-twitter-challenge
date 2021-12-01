<template>
  <div class="container">
    <div class="tweet-card">
      <div class="tweet-card-img"></div>
      <div class="tweet-card-content">
        <div class="tweet-card-content-info">
          <span class="name">Apple</span>
          <span class="account">@apple</span>
          <span class="created-at">3小時</span>
        </div>
        <div class="tweet-card-content-text">
          水瓶座的人頗富知性，且具有銳利的觀察力、推測能力、以及富有冒險的開拓精神。求知慾逐漸加強後，會對任何事物都深入去思考，對於社會種種的不平等以及矛盾現象，總產生懷疑的態度或不平之心，而逐漸傾向反體制的思想。Nulla
        </div>
        <div class="tweet-card-content-reply">
          <div class="content-reply">
            <img
              class="content-reply-icon"
              src="./../assets/images/comment-icon.svg"
            />
            <span class="content-reply-number">14</span>
          </div>
          <div class="content-reply">
            <img
              class="content-reply-icon"
              src="./../assets/images/like-icon.svg"
            />
            <span class="content-reply-number">40</span>
          </div>
        </div>
      </div>
    </div>
		<div class="tweet-card">
      <div class="tweet-card-img"></div>
      <div class="tweet-card-content">
        <div class="tweet-card-content-info">
          <span class="name">Apple</span>
          <span class="account">@apple</span>
          <span class="created-at">3小時</span>
        </div>
        <div class="tweet-card-content-text">
          水瓶座的人頗富知性，且具有銳利的觀察力、推測能力、以及富有冒險的開拓精神。求知慾逐漸加強後，會對任何事物都深入去思考，對於社會種種的不平等以及矛盾現象，總產生懷疑的態度或不平之心，而逐漸傾向反體制的思想。Nulla
        </div>
        <div class="tweet-card-content-reply">
          <div class="content-reply">
            <img
              class="content-reply-icon"
              src="./../assets/images/comment-icon.svg"
            />
            <span class="content-reply-number">14</span>
          </div>
          <div class="content-reply">
            <img
              class="content-reply-icon"
              src="./../assets/images/like-icon.svg"
            />
            <span class="content-reply-number">40</span>
          </div>
        </div>
      </div>
    </div>
		<div class="tweet-card">
      <div class="tweet-card-img"></div>
      <div class="tweet-card-content">
        <div class="tweet-card-content-info">
          <span class="name">Apple</span>
          <span class="account">@apple</span>
          <span class="created-at">3小時</span>
        </div>
        <div class="tweet-card-content-text">
          水瓶座的人頗富知性，且具有銳利的觀察力、推測能力、以及富有冒險的開拓精神。求知慾逐漸加強後，會對任何事物都深入去思考，對於社會種種的不平等以及矛盾現象，總產生懷疑的態度或不平之心，而逐漸傾向反體制的思想。Nulla
        </div>
        <div class="tweet-card-content-reply">
          <div class="content-reply">
            <img
              class="content-reply-icon"
              src="./../assets/images/comment-icon.svg"
            />
            <span class="content-reply-number">14</span>
          </div>
          <div class="content-reply">
            <img
              class="content-reply-icon"
              src="./../assets/images/like-icon.svg"
            />
            <span class="content-reply-number">40</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
* {
  font-size: 15px;
  font-weight: 500;
  text-align: left;
}
.container {
	display: flex;
	flex-direction: column;
}
.tweet-card {
  border-bottom: 1px solid $page-divider;
  width: 100%;
  height: 145px;
  padding: 15px;
  display: flex;
  &-img {
    width: 50px;
    height: 50px;
    border: 1px solid gray;
    border-radius: 50%;
  }
}
.tweet-card-content {
  flex: 1;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  &-info {
    .name {
      font-weight: 700;
      color: $main-font-color;
    }
    .account {
      margin: 0 5px;
      color: $label-font-color;
    }
    .created-at {
      color: $label-font-color;
      &::before {
        content: "•";
        margin-right: 5px;
      }
    }
  }
  &-text {
    margin: 5px 0;
    color: $main-font-color;
  }
  &-reply {
		padding: 5px 0;
    display: flex;
    .content-reply {
      display: flex;
			align-items: center;
			width: 80px;
      img {
        width: 15px;
        height: 15px;
				margin-right: 10px;
      }
			&-number {
				color: $label-font-color;
			}
    }
  }
}
</style>

<script>
export default {
  setup() {},
};
</script>
