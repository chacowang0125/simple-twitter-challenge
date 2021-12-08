import { apiHelper } from "./../utils/helpers";

export default {
    adminSignIn({ account, password }) {
        return apiHelper.post('/admin/signin', {
            account,
            password
        })
    },
    adminTweets() {
        return apiHelper.get('/admin/tweets')
    },
    getAdminCurrentUser() {
        return apiHelper.get('/admin/current_user')
    },
    deleteTweet({tweetId}) {
      return apiHelper.delete(`/admin/tweets/${tweetId}`)
    },
    getAllUsers() {
      return apiHelper.get(`admin/users`)
    }
}




