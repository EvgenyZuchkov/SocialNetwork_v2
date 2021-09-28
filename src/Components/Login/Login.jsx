import React from "react";
import s from "./Login.module.css"
import {connect} from "react-redux";
import {login} from "../../Redux/Auth-reducer";
import {Redirect} from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = (props) => {

    if (props.isAuth) {
        return <Redirect to={'/Profile'}/>
    }

    return (
        <div>
            <h1 className={s.login}>Sign Up</h1>
            <LoginForm login={props.login} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})


export default connect(mapStateToProps, {login})(Login);