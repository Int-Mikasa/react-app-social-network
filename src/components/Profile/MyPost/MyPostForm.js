import {Field, reduxForm} from "redux-form";
import {required} from "../../common/validation";
import React from "react";

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field cols="30" rows="10" className='app-content-input-text' component={"textarea"} validate={[required]} name={"message"}/>
            </div>
            <button className="btn-send">Add post</button>
        </form>
    );
}

const MyPostFormRedux = reduxForm({form: "myPostMessages"})(MyPostForm)

export default MyPostFormRedux