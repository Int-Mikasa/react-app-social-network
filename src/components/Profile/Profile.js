import MyPostContainer from "./MyPost/MyPostContainer";
import ProfileInfo from "./ProfileInfo";
import React from "react";

const Profile = React.memo((props) => {

    return (
        <div className="app-content">
            <ProfileInfo isOwner={props.isOwner} updateProfileInfo={props.updateProfileInfo} savePhoto={props.savePhoto}
                         isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus}
                         profile={props.profile}/>
            {!props.isOwner &&
            <MyPostContainer/>
            }
        </div>
    );
})

export default Profile