import './App.css';
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import {Route, withRouter} from "react-router-dom"
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./Components/Common/Preloader/Preloader";
import {initializeApp} from "./Redux/App-reducer";

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
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    userId: state.auth.id
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);