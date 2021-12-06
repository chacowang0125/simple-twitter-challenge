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
    }

}