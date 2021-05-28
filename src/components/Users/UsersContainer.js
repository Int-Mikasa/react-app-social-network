import Users from "./Users";
import {unFollowThunk, getUsers, onPageChanged, followThunk} from "../../redux/users-reducer"
import {connect} from "react-redux";
import React from "react";
import {compose} from "redux";
import Preloader from "../common/preloader";
import {
    getCurrentPageSelector, getFollowingProgressSelector, getIsFetchingSelector,
    getPageSizeSelector, getStartedPage,
    getTotalUsersCountSelector,
    getUserSelector
} from "../../redux/users-selector";
import {Redirect, withRouter} from "react-router";
import {getIsAuthSelector} from "../../redux/auth-selector";

class UsersComponentContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page) => {
        this.props.onPageChanged(page)
    }

    render() {
        if(!this.props.match.params.page) {
            return <Redirect to={`/users/${this.props.currentPage}`}/>
        }

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   users={this.props.users}
                   disableBtn={this.props.disabledBtn}
                   followingProgress={this.props.followingProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followThunk={this.props.followThunk}
                   unFollowThunk={this.props.unFollowThunk}
                   page={this.props.match.params.page}
                   isAuth={this.props.isAuth}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUserSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingProgress: getFollowingProgressSelector(state),
        startedPage: getStartedPage(state),
        isAuth: getIsAuthSelector(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        getUsers,
        onPageChanged,
        unFollowThunk,
        followThunk,
    }),
    withRouter
)(UsersComponentContainer)
