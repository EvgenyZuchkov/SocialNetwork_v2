import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let avatarElements = state.dialogs.map(a => <DialogItem avatar={a.avatar} key={a.id} id={a.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)

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
                <AddMessageForm sendMessage={props.sendMessage}/>
            </div>
        </div>
    )
}



export default Dialogs;