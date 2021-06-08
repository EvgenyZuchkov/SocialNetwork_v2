import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
    }
}
let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default DialogsContainer;