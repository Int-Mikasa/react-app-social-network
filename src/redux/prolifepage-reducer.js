import {profileAPI} from "../api/api";

const UPDATE_MESSAGE_IN_POST = "UPDATE-MESSAGE-IN-POST";
const ADD_POST = "ADD-POST";
const SET_PROFILE_USER = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

const initialState = {
    posts: [
        {message: "Hello world"},
        {message: "I'm booster"},
    ],
    newTextPosts: '',
    profile: null,
    status: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: action.value
            };
            return {
                ...state,
                newTextPosts: '',
                posts: [...state.posts, newPost]
            }
        case UPDATE_MESSAGE_IN_POST:
            return {
                ...state,
                newTextPosts: action.text
            }
        case SET_PROFILE_USER:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}

export const setProfileUser = (profile) => {
    return {
        type: SET_PROFILE_USER,
        profile
    }
}

export const addPostActionCreate = (value) => {
    return {
        type: ADD_POST,
        value
    }
}

export const updateTextPostActionCreate = (text) => {
    return {
        type: UPDATE_MESSAGE_IN_POST,
        text: text
    }
}


export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
}

export const setProfileStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const setUsers = (userId) => {
    return (dispatch) => {
        profileAPI.getUsers(userId)
            .then(response => {
                dispatch(setProfileUser(response))
            })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setProfileStatus(response))
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setProfileStatus(status))
                }
            })
    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(file)

        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    }
}

export const updateProfileInfo = (profile) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId;
        let response = await profileAPI.updateProfileInfo(profile)
        if(response.data.resultCode === 0) {
            dispatch(setUsers(userId))
        }
    }
}

export default profileReducer;