import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                {/*<img className={s.wall} src="https://static.schools.by/images/header-bg/img-17.jpg"/>*/}
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large}/>
                </div>
                <div>
                    <ProfileStatus status = {'Hey man'}/>
                    <strong>About me:</strong> {props.profile.aboutMe}<br/>
                    <strong>Contacts:</strong><br/>
                    <strong>Facebook:</strong> <a href="">{props.profile.contacts.facebook}</a><br/>
                    <strong>Website:</strong> {props.profile.contacts.website}<br/>

                    <strong>Twitter:</strong> {props.profile.contacts.twitter}<br/>
                    <strong>Instagram:</strong> {props.profile.contacts.instagram}<br/>
                    <strong>Youtube:</strong> {props.profile.contacts.youtube}<br/>
                    <strong>Github:</strong> {props.profile.contacts.github}<br/>
                    <strong>MainLink:</strong> {props.profile.contacts.mainLink}<br/>

                    <strong>LookingForAJob:</strong> {props.profile.contacts.lookingForAJob}<br/>
                    <strong>LookingForAJobDescription:</strong> {props.profile.contacts.lookingForAJobDescription}<br/>

                    <strong>FullName:</strong> {props.profile.contacts.fullName}<br/>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;