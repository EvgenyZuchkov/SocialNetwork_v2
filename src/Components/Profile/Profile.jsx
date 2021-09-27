import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;