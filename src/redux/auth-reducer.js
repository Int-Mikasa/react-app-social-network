import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH = "SET-AUTH"
const SET_LOGIN = "SET_LOGIN"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                ...action.payload
            }
        case SET_LOGIN:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const setAuth = (userId, email, login, isAuth) => {
    return {
        type: SET_AUTH,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    }
}

export const authThunk = () => {
    return (dispatch) => {
       return  authAPI.checkAuth()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data
                    dispatch(setAuth(id, email, login, true))
                }
            })
    }
}

export const loginThunk = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(authThunk())
                } else {
                    let message = response.data.message.length > 0 ? response.data.message[0] : "Some error"
                    dispatch(stopSubmit("login", {_error: message}))
                }
            })
    }
}

export const logoutThunk = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setAuth(null, null, null, false))
                }
            })
    }
}

export default authReducer;