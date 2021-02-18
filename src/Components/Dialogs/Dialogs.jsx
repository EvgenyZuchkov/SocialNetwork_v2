import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let avatarElements = props.dialogsPage.dialogs.map(a => <DialogItem avatar={a.avatar} id={a.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsAva}>
                {avatarElements}
            </div>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

            </div>
            <div className={s.textareaBlock}>
                <textarea cols="40" rows="5"
                          ref={newMessageElement}
                          onChange={onMessageChange}
                          value={props.dialogsPage.newMessageText}
                />
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;