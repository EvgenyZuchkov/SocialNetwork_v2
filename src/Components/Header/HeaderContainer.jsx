import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../Redux/Auth-reducer";
import {compose} from "redux";
import {getUserProfile} from "../../Redux/Profile-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData()
        this.props.getUserProfile(2)
    }

    render() {
        return <Header {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    profile: state.profilePage.profile
})


export default compose(
    connect(mapStateToProps, {getAuthUserData, getUserProfile, logout})
)(HeaderContainer);