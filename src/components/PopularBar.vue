<template>
  <div class="container">
    <ul class="list-container">
      <li class="list-header">Popular</li>
      <!-- render users here -->
      <li v-for="user in users" :key="user.id" class="list-card">
        <!-- router-link -->
        <div class="list-card-avatar">
          <router-link>
            <!-- <img class="card-avatar-img" src="user.avatar" alt=""> -->
          </router-link>
        </div>
        <div class="list-card-content">
          <div class="list-card-content-name">{{ user.name }}</div>
          <div class="list-card-content-account">{{ user.account }}</div>
        </div>
        <button
          class="list-card-button following"
          v-if="user.isFollowed"
          @click.stop.prevent="isFollowed(user.id)"
        >
          正在跟隨
        </button>
        <button
          class="list-card-button follow"
          v-else
          @click.stop.prevent="isFollowed(user.id)"
        >
          跟隨
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_popularbar.scss";
</style>

<script>
const dummydata = {
  users: [
    {
      id: 1,
      name: "Chaco",
      account: "@chaco123",
      avatar: "",
      isFollowed: true,
    },
    {
      id: 2,
      name: "Vince",
      account: "@vince123",
      avatar: "",
      isFollowed: false,
    },
    {
      id: 3,
      name: "小鹿",
      account: "@deer123",
      avatar: "",
      isFollowed: true,
    },
    {
      id: 4,
      name: "Ya Chu",
      account: "@yachu123",
      avatar: "",
      isFollowed: false,
    },
  ],
};
export default {
  name: "PopularBar",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    fetchUsers() {
      this.users = dummydata.users;
    },
    isFollowed(id) {
      //API post
      this.users = this.users.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            isFollowed: !user.isFollowed,
          };
        } else {
          return {
            ...user,
          };
        }
      });
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>
