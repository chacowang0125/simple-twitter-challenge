import { apiHelper } from "./../utils/helpers";

export default {
    addNewTweet({
        newTweet
    }) {
        return apiHelper.post('/tweets',
            newTweet
        )
    },
    getAllTweets() {
        return apiHelper.get('/tweets')
    },
    addLike ({ tweetId }) {
        return apiHelper.post(`/tweets/${tweetId}/like`, null)
    },
    deleteLike ({ tweetId }) {
        return apiHelper.post(`/tweets/${tweetId}/unlike`, null)
    },
}