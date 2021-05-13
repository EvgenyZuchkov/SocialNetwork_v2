import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "f3e64f93-4d0f-4f67-bba1-3a049e1954e1"},
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getUsersAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    deleteUsers(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    postUsers(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}