import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authThunk, logoutThunk, setAuth} from "../../redux/auth-reducer";
import {getProfileSelector} from "../../redux/profile-selectors";
import {getIsAuthSelector, getLoginSelector} from "../../redux/auth-selector";


class HeaderContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        login: getLoginSelector(state),
        isAuth: getIsAuthSelector(state),
        profile: getProfileSelector(state)
    }
}


let HeaderComponentContainer = connect(mapStateToProps, {setAuth, authThunk, logoutThunk})(HeaderContainer)

export default HeaderComponentContainer;