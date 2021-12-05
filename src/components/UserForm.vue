<template>
  <div class="container">
    <div class="page-title">帳戶設定</div>
    <div class="page-content">
      <form class="page-content-form" action="post">
        <div class="form-group">
          <label for="account">帳號</label>
          <input
            type="text"
            id="account"
            name="account"
            v-model.trim="user.account"
            required
          />
        </div>
        <div class="form-group">
          <label for="name">名稱</label>
          <input
            type="text"
            id="name"
            name="name"
            v-model.trim="user.name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            v-model.trim="user.email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">密碼</label>
          <input
            type="password"
            id="password"
            name="password"
            v-model.trim="user.password"
            required
          />
        </div>
        <div class="form-group">
          <label for="confirmed-password">密碼確認</label>
          <input
            type="password"
            id="confirmed-password"
            name="confirmed-password"
            v-model.trim="user.confirmedPassword"
            required
          />
        </div>
      </form>
      <div class="button-wrapper">
        <button class="form-button" @click.stop.prevent="handleSubmit">
          儲存
        </button>
      </div>
    </div>
  </div>
</template>
<script>
// import { Toast } from "./../utils/helpers";
import usersAPI from "../apis/users"

// const dummyUser = {
//   user: {
//     id: 1,
//     name: "Johe Doe",
//     account: "@wonderman",
//     email: "JohnDoe@gmail.com",
//     password: 123,
//     confirmedPassword: 123,
//   },
// };
export default {
  name: "UserForm",
  data() {
    return {
      user: {
        id: -1,
        name: "",
        account: "",
        email: "",
        password: "",
        confirmedPassword: "",
      },
    };
  },
  methods: {
    async fetchUser() {
			const { data } = await usersAPI.getCurrentUser()
			console.log(data)
      // this.user = dummyUser.user;
    },
    // handleSubmit() {
    //   post
    // },
  },
  created() {
    this.fetchUser();
  },
};
</script>

<style lang="scss" scoped>
	@import "../assets/styles/_userform.scss";
</style>