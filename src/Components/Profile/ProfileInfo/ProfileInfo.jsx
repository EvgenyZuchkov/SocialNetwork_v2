import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../Assets/Images/User-Icon.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import React, {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.profileAvatar}>
                    <img src={props.profile.photos.large || userPhoto}/>
                    <div>
                        {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                    </div>
                </div>
                <div>
                    <div className={s.userStatus}>
                        <b className={s.statusName}>Status:</b>
                        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                    {editMode
                        ? <ProfileDataForm profile={props.profile}
                                           saveProfile={props.saveProfile}
                                           setEditMode={setEditMode}
                        />
                        : <ProfileData profile={props.profile}
                                       isOwner={props.isOwner}
                                       goToEditMode={()=>{setEditMode(true)}}
                        />}
                </div>
            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div className={s.personalDataBlock}>
            {props.isOwner && <div><button onClick={props.goToEditMode}>Edit personal data</button></div>}
            <div>

            </div>
            <div>
                <b>Full Name: </b>{props.profile.fullName}
            </div>
            <div>
                <b>LookingForAJob:</b> {props.profile.lookingForAJob ? 'Yes' : 'No'}
            </div>
            {props.profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me: </b>{props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts: </b>{Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>

        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle} : {contactValue}</b></div>
}

export default ProfileInfo;