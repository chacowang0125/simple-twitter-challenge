import { apiHelper } from './../utils/helpers'

export default {
    getCurrentUser() {
        return apiHelper.get('/users/current_user')
    },
    getUser(
        userId
    ) {
        return apiHelper.get(`/users/${userId}`)
    },
    getTopUsers() {
        return apiHelper.get('/users/tops')
    },
    update({ userId, formData }) {
        return apiHelper.put(`/users/${userId}/setting`, formData)
    },
    addFollow({
        userId
    }) {
        return apiHelper.post('/followships', { userId })
    },
    deleteFollow({
        userId
    }) {
        return apiHelper.delete(`/followships/${userId}`)
    },
    getFollowers(userId) {
        return apiHelper(`/users/${userId}/followers`)
    },
    getFollowings(userId) {
        return apiHelper(`/users/${userId}/followings`)
    },
    getTotalTweets(userId) {
        return apiHelper(`/users/${userId}/tweets`)
    }

}