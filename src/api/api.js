import axios from "axios";


let instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY" : "bf83336e-1229-481e-86a7-1f32d63200de",
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(id) {
        return instanse.post(`follow/${id}`)
    },
    unFollow(id) {
        return instanse.delete(`follow/${id}`)
    }
}

export const profileAPI = {
    getUsers(userId) {
        return instanse.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instanse.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instanse.put(`profile/status`, {status: status})
            .then(response => response.data)
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instanse.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfileInfo(profile) {
        return instanse.put(`profile`,profile)
    }
}

export const authAPI = {
    checkAuth() {
        return instanse.get(`/auth/me`).then(response => response.data)
    },
    login(email,password,rememberMe = false) {
        return instanse.post(` /auth/login`, {
            email,
            password,
            rememberMe
        })
    },
    logout() {
        return instanse.delete(`/auth/login`)
    }
}
