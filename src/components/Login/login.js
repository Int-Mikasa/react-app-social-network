import React from "react";
import {Field, reduxForm} from "redux-form";
import {loginThunk, logoutThunk} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Input} from "../common/custromComponents/FormsControls";
import {required} from "../common/validation";
import {Redirect} from "react-router";
import {getIsAuthSelector} from "../../redux/auth-selector";

const Login = (props) => {

    let onSubmit = (formDataLogin) => {
        props.loginThunk(formDataLogin.email, formDataLogin.password, formDataLogin.rememberMe)
    }
    
    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
}

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholeder={"Email"} validate={[required]} component={Input} name={"email"}/>
            </div>
            <div>
                <Field placeholeder={"Password"} validate={[required]} type={"password"} component={Input} name={"password"}/>
            </div>
            <div>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"}/> remember me
            </div>
            { props.error &&
                <div>
                    {props.error}
                </div>
            }
            <button>Login</button>
        </form>
    );
}


let mapStateToProps = (state) => {

    return {
        isAuth: getIsAuthSelector(state)
    }
}

let LoginContainer = connect(mapStateToProps, {loginThunk, logoutThunk})(Login)

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

export default LoginContainer