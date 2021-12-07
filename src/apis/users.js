import { apiHelper } from './../utils/helpers'

export default {
    getCurrentUser() {
        return apiHelper.get('/users/current_user')
    },
    getUser ({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
    update({ userId, formData }) {
        return apiHelper.put(`/users/${userId}/setting`,
            formData
        )
    },
    getUserTweets({ userId }) {
        return apiHelper.get(`users/${userId}/tweets`)
    },
    getUserComments({ userId }) {
        return apiHelper.get(`users/${userId}/replied_tweets`)
    },
    getUserLikes({ userId }) {
        return apiHelper.get(`users/${userId}/likes`)
    },
    updateUserProfile({ userId,formData }) {
        return apiHelper.put(`users/${userId}`,formData)
    }
}