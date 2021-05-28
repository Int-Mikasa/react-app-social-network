const UPDATE_MESSAGE_IN_INPUT_MESSAGE = "UPDATE-MESSAGE-IN-INPUT-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE"

const initialState = {
    usersData: [
        {id: 1, user: "Dima"},
        {id: 2, user: "Vasya"},
        {id: 3, user: "Oleg"}
    ],
    messages: [
        {message: "Hi"},
        {message: "You"},
        {message: "Are"},
        {message: "P"}
    ],
    newMessage: ''
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let text = action.text
        return {
            ...state,
            messages: [...state.messages, {message: text}]
        }
        case UPDATE_MESSAGE_IN_INPUT_MESSAGE:
        return {
            ...state,
            newMessage: action.text
        }
        default:
            return state

    }
}

export const sendMessageActionCreate = (text) => {
    return {
        type: SEND_MESSAGE,
        text: text
    }
}

export default  messageReducer;