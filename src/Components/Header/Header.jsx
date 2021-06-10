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
            <img src={logo}/>
            <b>SN</b>
            <div className={s.loginBlock}>
                <div className={s.infoUser}>
                    <div>
                        User: {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                    </div>
                    <div>
                        Email: {props.email}
                    </div>
                </div>
                <div>
                    {props.isAuth ? <img src={props.profile.photos.small}/> : null}
                </div>
            </div>
        </header>
    )
}

export default Header;