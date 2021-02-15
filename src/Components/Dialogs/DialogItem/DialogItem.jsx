import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src={props.avatar}/>
            <NavLink to={path} activeClassName = {s.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;