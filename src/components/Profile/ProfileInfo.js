import React, {useState} from "react";
import "./Profile.css"
import Preloader from "../common/preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import PhotoUrl from "../../assets/img/87afef76100d0b704ca5b6039468a736.jpg"
import {reduxForm} from "redux-form";
import {creatField, Input, Teaxtarea} from "../common/custromComponents/FormsControls";
import ProfileData from "./ProfileData";
import ProfileInfoReduxForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(true)

    let onSubmit = (formData) => {
        setEditMode(true)
        props.updateProfileInfo(formData)

    }

    let changePhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    let changeMode = () => setEditMode(prev => !prev)

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className="app-content-profile-page">
            <div className="app-content-profile">
                <div>
                    <img className="app-main-img" src={props.profile.photos.large || PhotoUrl} alt="art"/>
                    {!props.isOwner &&
                    <div>
                        <input type="file" onChange={changePhoto}/>
                    </div>
                    }
                </div>
            </div>
            <div>
                {editMode ? <ProfileData isOwner={props.isOwner} changeMode={changeMode} profile={props.profile}/> :
                    <ProfileInfoReduxForm changeMode={changeMode} initialValues={props.profile} onSubmit={onSubmit}
                                          profile={props.profile}/>}
            </div>
            <ProfileStatusWithHook isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
        ;
}

export default ProfileInfo