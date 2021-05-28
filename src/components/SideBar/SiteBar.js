import './SiteBar.css'
import {NavLink} from "react-router-dom";

const Navigation = (props) => {

    return (
        <nav className="app-navigation">
            <div className="app-navigation-links">
                <NavLink to="/profile">Profile</NavLink>
            </div>
            {/*<div className="app-navigation-links">*/}
            {/*    <NavLink to="/messages">Messages</NavLink>*/}
            {/*</div>*/}
            <div className="app-navigation-links">
                <NavLink to="/users">Users</NavLink>
            </div>
        </nav>);
}

export default Navigation;