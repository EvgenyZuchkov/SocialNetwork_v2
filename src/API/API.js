import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "e11ded1e-8230-4e47-8077-69d9dbc29103"},
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getUsersAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    deleteUsers(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    postUsers(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    }
}