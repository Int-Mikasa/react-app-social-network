import React from "react";
import {Route} from "react-router-dom";
import Preloader from "../components/common/preloader";

const suspense = (Component) => {
        return <React.Suspense fallback={<Preloader/>}>
            {Component}
        </React.Suspense>
    };

export default suspense