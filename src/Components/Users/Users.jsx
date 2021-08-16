import s from "./Users.module.css";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


let Users = (props) => {
    return (
        <div className={s.users}>
            <Paginator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
            />
            {
                props.users.map(u =>
                    <User key={u.id}
                          user={u}
                          followingInProgress={props.followingInProgress}
                          follow={props.follow}
                          unfollow={props.unfollow}
                    />)
            }
        </div>
    )
}


export default Users;