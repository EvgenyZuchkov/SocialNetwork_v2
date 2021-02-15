import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://bitcoinvault.global/img/logo_large.svg"/>
            <div className={s.name}>
                Social Network v.2
            </div>
        </header>
    )
}

export default Header;