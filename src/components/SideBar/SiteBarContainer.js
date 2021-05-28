import {connect} from "react-redux";
import Navigation from "./SiteBar";


let mapStateToProps = (state) => {
    return {
        siteBar: state.siteBar
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NavigationContainer = connect(mapStateToProps,mapDispatchToProps)(Navigation)

export default NavigationContainer;