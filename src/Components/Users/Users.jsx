import s from "./Users.module.css";
import userPhoto from "../../Assets/Images/User-Icon.jpg";
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) / 20
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.users}>
            <div className={s.pageNumber}>
                {pages.map(p => {
                    return <button className={props.currentPage === p && s.selectedPage}
                                   onClick={() => {
                                       props.onPageChanged(p)
                                   }}>{p}</button>
                })}
            </div>
            {
                props.users.map(u => <div className={s.usersBlock} key={u.id}>

                    <div className={s.usersAva}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div className={s.usersButton}>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.unfollow(u.id)
                                      }}>
                                Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follow(u.id)
                                      }}>
                                Follow</button>
                        }
                    </div>
                    <div className={s.usersData}>
                        <div>
                            <b>Name:</b> {u.name}
                        </div>
                        <div>
                            <b>Status:</b> {u.status}
                        </div>
                        <div>
                            <b>Country:</b> {'u.location.country'}
                        </div>
                        <div>
                            <b>City:</b> {'u.location.city'}
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;