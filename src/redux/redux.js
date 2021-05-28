import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./prolifepage-reducer";
import messageReducer from "./messagepage-reducer";
import sitebarReducer from "./sitebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-redecer";

let redusers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    siteBar: sitebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;