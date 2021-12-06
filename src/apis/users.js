import { apiHelper } from './../utils/helpers'

export default {
    getCurrentUser() {
        return apiHelper.get('/users/current_user')
    },
    update({ userId, formData }) {
        return apiHelper.put(`/users/${userId}/setting`, formData)
    }
}