import { apiHelper } from "./../utils/helpers";

export default {
    addNewTweet({
        newTweet
    }) {
        return apiHelper.post('/tweets',
            newTweet
        )
    },
    getTweet(tweetId) {
        return apiHelper.get(`/tweets/${tweetId}`)
    },
    getTweetReplies(
        tweetId
    ) {
        return apiHelper.get(`/tweets/${tweetId}/replies`)
    },
    getAllTweets() {
        return apiHelper.get('/tweets')
    },
    addLike(id) {
        return apiHelper.post(`/tweets/${id}/like`)
    }

}