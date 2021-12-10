import { apiHelper } from "./../utils/helpers";

export default {
    publicHistory() {
        return apiHelper.get('/messages/public')
    },
   
}