import {$, jQuery} from 'jquery';
import Post from "./Post/Post";
import React from 'react';
// import {addPostActionCreate, updateTextPostActionCreate} from "../../../state";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {getProfileSelector} from "../../../redux/profile-selectors";
import {addPostActionCreate, updateTextPostActionCreate} from "../../../redux/prolifepage-reducer";

const newPostElement = React.createRef();


let mapDispatchToProps = (dispatch) => {

    return {
        addPost: (value) => {
            dispatch(addPostActionCreate(value))
        },
        updateTextPost: (text) => {
            dispatch(updateTextPostActionCreate(text))
        }
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newTextPosts: state.profilePage.newTextPosts,
        profile: getProfileSelector(state)
    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)

export default MyPostContainer




