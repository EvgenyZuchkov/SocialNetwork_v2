import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://static.schools.by/images/header-bg/img-17.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + discription
            </div>
        </div>
    )
}

export default ProfileInfo;