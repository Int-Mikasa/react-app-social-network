import React from "react";
import Messages from "./messages";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthReditect";
import {compose} from "redux";
import {getMessagesSelector, getNewMessageSelector, getUsersDataSelector} from "../../redux/messages-selectors";

let mapStateToProps = (state) => {
    return {
        messages: getMessagesSelector(state),
        usersData: getUsersDataSelector(state),
        newMessage: getNewMessageSelector(state),
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}

export  default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Messages)
