import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    setUsers,
    setProfileUser,
    getStatus,
    updateStatus,
    savePhoto,
    updateProfileInfo
} from "../../redux/prolifepage-reducer";
import {withRouter} from "react-router";
import {compose} from "redux";
import {
    getAuthorizedUserIdSelector,
    getIsAuthSelector,
    getProfileSelector,
    getStatusSelector
} from "../../redux/profile-selectors";


class ProfileContainer extends React.Component {

    refreshProfile = () => {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.setUsers(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile updateProfileInfo={this.props.updateProfileInfo} savePhoto={this.props.savePhoto}
                        isOwner={this.props.match.params.userId} profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: getProfileSelector(state),
        status: getStatusSelector(state),
        authorizedUserId: getAuthorizedUserIdSelector(state),
        isAuth: getIsAuthSelector(state)
    }
}

export default compose(
    connect(mapStateToProps, {setProfileUser, setUsers, getStatus, updateStatus, savePhoto, updateProfileInfo}),
    withRouter,
)(ProfileContainer)
