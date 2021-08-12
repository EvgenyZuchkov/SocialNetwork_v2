import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../Assets/Images/User-Icon.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.profileAvatar}>
                    <img src={props.profile.photos.large === null ? userPhoto : null}/>
                </div>
                <div>
                    <div className={s.userStatus}>
                        <b className={s.statusName}>Status:</b>
                        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                    <div>
                        <b>About me:</b> {props.profile.aboutMe}<br/>
                        <b>Contacts:</b><br/>
                        <b>Facebook:</b> <a href="">{props.profile.contacts.facebook}</a><br/>
                        <b>Website:</b> {props.profile.contacts.website}<br/>

                        <b>Twitter:</b> {props.profile.contacts.twitter}<br/>
                        <b>Instagram:</b> {props.profile.contacts.instagram}<br/>
                        <b>Youtube:</b> {props.profile.contacts.youtube}<br/>
                        <b>Github:</b> {props.profile.contacts.github}<br/>
                        <b>MainLink:</b> {props.profile.contacts.mainLink}<br/>

                        <b>LookingForAJob:</b> {props.profile.contacts.lookingForAJob}<br/>
                        <b>LookingForAJobDescription:</b> {props.profile.contacts.lookingForAJobDescription}<br/>

                        <b>FullName:</b> {props.profile.contacts.fullName}<br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;