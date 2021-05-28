import React from "react";
import preloader from "../../assets/img/b4d657e7ef262b88eb5f7ac021edda87.gif"
import "../Users/Users.css"

const Preloader = (props) => {

    return (
        <div>
            <img src={preloader} className="preloader" alt="preloader"/>
        </div>
    );
}

export default Preloader;