import React, {useState} from "react";

const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)


    const activeEditMode =() => {
        setEditMode(true)
    }

    const deActiveEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const setStatusText = (e) => {
        setStatus(e.target.value)
    }

        return (
            <div>
                {!props.isOwner ?
                    <div>
                        {!editMode &&
                        <div>
                            <span onDoubleClick={activeEditMode}>{props.status || "Установите статус"}</span>
                        </div>
                        }
                        {editMode &&
                        <div>
                            <input autoFocus={true} onChange={setStatusText} onBlur={deActiveEditMode} value={status} type="text"/>
                        </div>
                        }
                    </div>
                    : <div>
                        <div>
                            <span>{props.status || "Установите статус"}</span>
                        </div>
                    </div>
                }
            </div>
            )
    }

export default ProfileStatusWithHook