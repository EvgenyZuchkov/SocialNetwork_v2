import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Dimych</div>
                <div className={s.dialog}>Valera</div>
                <div className={s.dialog}>Sasha</div>
                <div className={s.dialog}>Lena</div>
                <div className={s.dialog}>Vika</div>
                <div className={s.dialog}>Egor</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello, i am busy</div>
                <div className={s.message}>No, thank you</div>
                <div className={s.message}>Goodnight</div>
            </div>
        </div>
    )
}

export default Dialogs;