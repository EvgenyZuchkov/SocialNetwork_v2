import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import state, {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./Redux/State";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     addMessage={addMessage}
                     updateNewMessageText={updateNewMessageText}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}