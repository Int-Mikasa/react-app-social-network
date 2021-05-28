import '../Profile/Profile.css'
import {NavLink} from "react-router-dom";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../common/validation";
import {Teaxtarea} from "../common/custromComponents/FormsControls";
import {sendMessageActionCreate} from "../../redux/messagepage-reducer";



const Messages = (props) => {

    return (

        <div className="app-messages app-content">
            <Users usersData={props.usersData}/>
            <UsersMessages messages={props.messages} newMessage={props.newMessage} dispatch={props.dispatch}/>
        </div>
    );
}

const User = (props) => {
    let path = "/messages/" + props.id;

    return (
        <div>
            <NavLink to={path}>{props.user}</NavLink>
        </div>
    );
}

const Users = (props) => {
    let userElement = props.usersData.map((el) => {
        return <User id={el.id} user={el.user}/>
    })

    return (
        <div className="app-messages-users">
            {userElement}
        </div>
    );
}

const UsersMessages = (props) => {

    let onSubmit = (value) => {
        props.dispatch(sendMessageActionCreate(value.message))
    }

    return (
        <div className="app-message">
            <IndMessages messages={props.messages}/>
            <ReduxFormMessages onSubmit={onSubmit}/>
        </div>
    );
}

const maxLength10 = maxLengthCreator(10)

const FormMessages = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength10]} component={Teaxtarea} name={"message"} />
            </div>
            <button>Отправить</button>
        </form>
    );
}

const IndMessages = (props) => {

    let messagesElements = props.messages.map(messages => <Message message={messages.message}/>)

    return (
        <div>
            {messagesElements}
        </div>
    );
}

const Message = (props) => {
    return (
        <div>
            <span>{props.message}</span>
        </div>
    );
}

const ReduxFormMessages = reduxForm({ form: 'messages' })(FormMessages)

export default Messages;