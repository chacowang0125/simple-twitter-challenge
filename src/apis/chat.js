import { apiHelper } from "./../utils/helpers";

export default {
    publicHistory() {
        return apiHelper.get('/messages/public')
    },
    privateHistory({ userId }) {
        return apiHelper.get(`/messages/private/${userId}`)
    },
   
}