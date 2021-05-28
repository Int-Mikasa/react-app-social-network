import './Header.css'
import {NavLink} from "react-router-dom";
import Logo from "../../assets/img/instagram-logo.png"

const Header = (props) => {

    return (
        <header className="app-header">
            <div className="app-header-space">
                <div className="app-header-logo">
                    <NavLink to={'/profile'}>
                        <img className="app-header-logo-img" src={Logo} alt="logo"/>
                    </NavLink>
                </div>
                <div className="app-header-auth">
                    <div className="app-header-auth-login">
                        {props.isAuth
                            ? <div>{props.login} - <button onClick={props.logoutThunk}>Log out</button></div>
                            :
                            <NavLink className="app-header-login" to={"/login"}>Login</NavLink>}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;