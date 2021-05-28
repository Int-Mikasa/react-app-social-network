import React from "react";
import style from "./FormsControls1.module.css"
import {Field} from "redux-form";

const FormsControls = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={style.formControls + " " + (hasError ? style.error : " ")}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    );
}

export const Teaxtarea = (props) => {
    const {input, meta, ...restProps} = props

    return <FormsControls {...props}>
        <textarea {...input} {...restProps}/>
    </FormsControls>
}

export const Input = (props) => {
    const {input, placeholder, meta, ...restProps} = props

    return <FormsControls {...props}>
        <input {...input} {...restProps}/>
    </FormsControls>
}

export const creatField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholeder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)
