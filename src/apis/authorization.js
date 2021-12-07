import { apiHelper } from "./../utils/helpers";

export default {
    signIn({ account, password }) {
        return apiHelper.post('/signin', {
            account,
            password
        })
    },
    adminSignIn({ account, password }) {
        return apiHelper.post('/admin/signin', {
            account,
            password
        })
    },
    signup({ formData }) {
        return apiHelper.post(`/users`, formData)
    }
}