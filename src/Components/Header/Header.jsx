import s from './Header.module.css'
import logo from '../../Assets/Images/logo.png'

const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo}/>
            <b>SN v.2</b>
        </header>
    )
}

export default Header;