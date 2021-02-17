import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let avatarElements = props.state.dialogs.map(a => <DialogItem avatar={a.avatar} id={a.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let sendMessageEl = React.createRef()
    let sendMessage = () => {
        let message = sendMessageEl.current.value;
        alert(message)
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
                <textarea ref={sendMessageEl} cols="40" rows="5"></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;