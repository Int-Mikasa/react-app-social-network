import {creatField, Input, Teaxtarea} from "../common/custromComponents/FormsControls";
import {reduxForm} from "redux-form";
import React from "react";

const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <button>Save</button>
        <div>
            <b>Full name</b> : {creatField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
            {creatField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>My professional skill</b>: {props.profile.lookingForAJobDescription}
            {creatField("My professional skill", "lookingForAJobDescription", [], Teaxtarea)}
        </div>
        <div>
            <b>About me</b>: {props.profile.aboutMe}
            {creatField("About Me", "aboutMe", [], Teaxtarea)}
        </div>
    </form>
}

const ProfileInfoReduxForm = reduxForm({form: "profileInfo"})(ProfileDataForm)

export default ProfileInfoReduxForm