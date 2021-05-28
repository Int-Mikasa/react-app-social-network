import React from "react";

const ProfileData = (props) => {
    return (<div>
            {!props.isOwner && <button onClick={props.changeMode}>Edit</button>}

            <div>
                <b>Full name</b>: {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yex" : "no"}
            </div>
            {props.profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me</b>: {props.profile.aboutMe}
            </div>
        </div>
    )
}

export default ProfileData;