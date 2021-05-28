import Post from "./Post/Post";
import React, {useEffect} from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../common/validation";
import MyPostFormRedux from "./MyPostForm";

const MyPost =  (props) => {

    let addNewMessage = (value) => {
        props.addPost(value.message)
    }

    let postElements = props.posts.map(post => <Post  message={post.message}/>)

    return (
        <div className="app-content-messages">
            <div className="app-content-profile-posts">
                <h2>My posts</h2>
                <MyPostFormRedux onSubmit={addNewMessage}/>
            </div>
            {postElements}
        </div>
    );
}

export default MyPost




