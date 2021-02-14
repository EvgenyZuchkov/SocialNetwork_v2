import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Lena'},
        {id: 5, name: 'Vika'},
        {id: 6, name: 'Egor'},
    ]

    let messages = [
        {id: 1, message: 'Hello, i am busy'},
        {id: 2, message: 'No, thank you'},
        {id: 3, message: 'Goodnight'},
        {id: 4, message: 'Ok'},
        {id: 5, message: 'Yo, man'},
        {id: 6, message: 'Yo'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;