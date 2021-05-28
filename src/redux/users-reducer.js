import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const TOTAL_USERS_COUNT = "TOTAL-USERS-COUNT"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const FOLLOWING_PROGRESS = "FOLLOWING_PROGRESS"


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    startedPage: 1,
    followingProgress : []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
       return  {
            ...state,
           users: state.users.map(u => {
               if(u.id === action.userId) {
                   return {...u, followed: true}

               }
               return u;
           })
        }
        case UNFOLLOW:
        return {
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u
            })
        }
        case SET_USERS: {
            return  { ...state, users: [...action.users] }
        }
        case TOTAL_USERS_COUNT: {
            return  { ...state, totalUsersCount : action.totalUsersCount }
        }
        case SET_CURRENT_PAGE: {
            return  { ...state, currentPage : action.currentPage }
        }
        case TOGGLE_IS_FETCHING: {
            return  { ...state, isFetching : action.isFetching }
        }
        case FOLLOWING_PROGRESS: {
            return {...state,
                followingProgress: action.isFetching
                ? [...state.followingProgress, action.userId]
                : state.followingProgress.filter(id => id != action.userId)
            }
        }
        default :
            return state;
    }
}

export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unFollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: TOTAL_USERS_COUNT,
        totalUsersCount
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response .items))
            dispatch(setTotalUsersCount(response.totalCount))
        })
    }
}

export const onPageChanged = (page,pageSize = initialState.pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        usersAPI.getUsers(page, pageSize)
            .then(response => {
               dispatch(toggleIsFetching(false))
                dispatch(setUsers(response.items))
            })
    }
}

export const unFollowThunk = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
       let response = await usersAPI.unFollow(userId)
                if (response.data.resultCode === 0) {
                    dispatch(unFollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
    }
}

export const followThunk = (userId) => {
    return  async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
         let response = await usersAPI.follow(userId)
                if (response.data.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
    }
}

export default usersReducer;