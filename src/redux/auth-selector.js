import {createSelector} from "reselect";

export const getIsAuthSelector = (state) => state.auth.isAuth

export const getLoginSelector = (state) => state.auth.login