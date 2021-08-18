import './App.css';
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import HeaderContainer from "./Components/Header/HeaderContainer";
import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./Components/Common/Preloader/Preloader";
import {initializeApp} from "./Redux/App-reducer";
import store from "./Redux/Redux-store";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const LoginPage = React.lazy(() => import('./Components/Login/Login'));

class App extends Component {

    componentDidMount() {
        this.props.initializeApp(this.props.userId)
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='app-wrapper-content'>
                    <React.Suspense fallback={<Preloader/>}>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <LoginPage/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </React.Suspense>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    userId: state.auth.id
})

// This is code for successful test complete
const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        {/*<React.StrictMode>*/}
        <Provider store={store}>
            <AppContainer/>
        </Provider>
        {/*</React.StrictMode>*/}
    </BrowserRouter>
}

export default SamuraiJSApp;