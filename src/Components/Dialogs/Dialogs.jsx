import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key = {d.id} id={d.id}/>);
    let avatarElements = state.dialogs.map(a => <DialogItem avatar={a.avatar} key = {a.id} id={a.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} key = {m.id}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)

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
                          value={newMessageBody}
                          onChange={onNewMessageChange}
                          placeholder='Enter your message'

                />
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;