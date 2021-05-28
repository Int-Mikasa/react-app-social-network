import {authThunk} from "./auth-reducer";

const INITIALIZATION_SUCCESS = "INITIALIZATION_SUCCESS"


let initialState = {
    initialization: false

}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATION_SUCCESS:
            return {
                ...state,
                initialization: true
            }
        default:
            return state
    }
}

export const initializationSuccess = () => {
    return {
        type: INITIALIZATION_SUCCESS
    }
}

export const initializationThunk = () => {
    return (dispatch) => {
        let promise = dispatch(authThunk())
        promise.then(() => {
            dispatch(initializationSuccess())
        })
    }
}

export default appReducer;