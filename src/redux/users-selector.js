import {createSelector} from "reselect";

export const getUserSelector = (state) => {
    return state.usersPage.users
}

export const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingProgressSelector = (state) => {
    return state.usersPage.followingProgress
}
export const getStartedPage = (state) => {
    return state.usersPage.startedPage
}