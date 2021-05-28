import messageReducer from "./redux/messagepage-reducer";
import profileReducer from "./redux/prolifepage-reducer";

// const UPDATE_MESSAGE_IN_POST = "UPDATE-MESSAGE-IN-POST";
// const ADD_POST = "ADD-POST";
// const UPDATE_MESSAGE_IN_INPUT_MESSAGE = "UPDATE-MESSAGE-IN-INPUT-MESSAGE";
// const SEND_MESSAGE = "SEND-MESSAGE"

// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {message: "Hello world"},
//                 {message: "I'm booster"},
//             ],
//             newTextPosts: ''
//         },
//         messagePage: {
//             usersData: [
//                 {id: 1, user: "Dima"},
//                 {id: 2, user: "Vasya"},
//                 {id: 3, user: "Oleg"}
//             ],
//             messages: [
//                 {message: "Hi"},
//                 {message: "You"},
//                 {message: "Are"},
//                 {message: "P"}
//             ],
//             newMessage: ''
//         },
//         siteBar: {
//             friendsData: [
//                 {id: 5, user: "Olag"},
//                 {id: 7, user: "Ivan"},
//                 {id: 8, user: "Frodo"},
//                 {id: 9, user: "Olga"},
//             ]
//         }
//     },
//     sendMessage() {
//         let newMessage = {
//             message: this._state.messagePage.newMessage
//         }
//         this._state.messagePage.messages.push(newMessage)
//         this._state.messagePage.newMessage = ""
//         this._renderEntireTree(this._state)
//
//     },
//     getState() {
//         return this._state;
//     },
//     _renderEntireTree() {
//
//     },
//     callBack(observer) {
//         this._renderEntireTree = observer
//     },
//     dispatch(action) {
//         this._state.messagePage = messageReducer(this._state.messagePage, action)
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._renderEntireTree(this._state)
//     }
// }

// export const addPostActionCreate = (value) => {
//     return {
//         type: ADD_POST,
//         value
//     }
// }
//
// export const sendMessageActionCreate = (text) => {
//     return {
//         type: SEND_MESSAGE,
//         text: text
//     }
// }
//
// export const uprateTextMessageActionCreate = (text) => {
//     return {
//         type: UPDATE_MESSAGE_IN_INPUT_MESSAGE,
//         text: text
//     }
// }
//
// export const updateTextPostActionCreate = (text) => {
//     return {
//         type: UPDATE_MESSAGE_IN_POST,
//         text: text
//     }
// }

// export default store;
