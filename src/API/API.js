import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "e11ded1e-8230-4e47-8077-69d9dbc29103"},
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}