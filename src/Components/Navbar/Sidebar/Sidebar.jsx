import s from './Sidebar.module.css'

const Sidebar = (props) => {
    return (
        <div className={s.avatar}>
            <img src={props.avatar}/>
        </div>
    )
}

export default Sidebar;