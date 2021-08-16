import s from "./Users.module.css";
import userPhoto from "../../Assets/Images/User-Icon.jpg";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={s.usersBlock}>

            <div className={s.usersAva}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto}/>
                </NavLink>
            </div>
            <div className={s.usersButton}>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>
                        Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}>
                        Follow</button>
                }
            </div>
            <div className={s.usersData}>
                <div>
                    <b>Name:</b> {user.name}
                </div>
                <div>
                    <b>Status:</b> {user.status}
                </div>
                <div>
                    <b>Country:</b> {'user.location.country'}
                </div>
                <div>
                    <b>City:</b> {'user.location.city'}
                </div>
            </div>
        </div>)
}

export default User;