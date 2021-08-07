import s from './Header.module.css'
import logo from '../../Assets/Images/logo.png'
import {NavLink} from "react-router-dom";
import Preloader from "../Common/Preloader/Preloader";


const Header = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <header className={s.header}>
            <div className={s.headerLogo}>
                <img src={logo}/>
            </div>
            <div className={s.headerName}>
                <b>SN</b>
            </div>
            <div className={s.userAvatar}>
                {props.isAuth ? <img src={props.profile.photos.small}/> : null}
            </div>
            <div className={s.userData}>
                <div>
                    User: {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
                </div>
                <div>
                    Email: {props.email}
                </div>
            </div>
            <div className={s.buttonLogout}>
                {props.isAuth
                    ? <button onClick={props.logout}>Log out</button>
                    : <NavLink to={'/login'}>Login</NavLink>}}
            </div>
        </header>
    )
}

export default Header;