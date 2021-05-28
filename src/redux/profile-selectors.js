import {createSelector} from "reselect";

export const getProfileSelector = (state) => {
    return state.profilePage.profile
}

export const getStatusSelector = (state) => {
    return state.profilePage.status
}

export const getAuthorizedUserIdSelector = (state) => {
    return state.auth.userId
}

export const getIsAuthSelector = (state) => {
    return state.auth.isAuth
}