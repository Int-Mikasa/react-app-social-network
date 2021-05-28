import React from 'react'
import './App.css';
import {Route} from "react-router-dom";
import MessagesContainer from "./components/Messages/messagesContainer";
import NavigationContainer from "./components/SideBar/SiteBarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ContainerProfile from "./components/Profile/ProfileContainer";
import HeaderComponentContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializationThunk} from "./redux/app-redecer";
import {Redirect, withRouter} from "react-router";
import {Component} from "react";
import Preloader from "./components/common/preloader";
import withSuspense from "./hoc/suspense";
// const MessagesContainer = React.lazy(() => import('./components/Messages/messagesContainer'))
// const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))


class App extends Component {

    componentDidMount() {
        this.props.initializationThunk()
    }

    render() {
        if(!this.props.initialization) {
            return <Preloader />
        }

        return (
                <div className="app-wrapper">
                    <HeaderComponentContainer/>
                    <section className="app-block">
                        <Route excact path='/' render={() => <Redirect to={'/profile'}/> }/>
                        <NavigationContainer/>
                        {/*<Route path='/messages:msg?' render={() => withSuspense(<MessagesContainer/>)}/>*/}
                        <Route path='/profile/:userId?' render={() => <ContainerProfile/>}/>
                        <Route path='/users/:page?' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <LoginContainer/>}/>
                    </section>
                </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialization: state.app.initialization
    }
}

export default compose(
    connect(mapStateToProps,{initializationThunk})
)(App);
