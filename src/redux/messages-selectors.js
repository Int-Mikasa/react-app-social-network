import {createSelector} from "reselect";

export const getMessagesSelector = (state) => {
    return state.messagePage.messages
}

export const getUsersDataSelector = (state) => {
    return state.messagePage.usersData
}

export const getNewMessageSelector = (state) => {
    return state.messagePage.newMessage
}
