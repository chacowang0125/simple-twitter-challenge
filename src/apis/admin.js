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

}




