import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authMe, setAuthUserData} from "../../Redux/Auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMe()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData, authMe})(HeaderContainer);