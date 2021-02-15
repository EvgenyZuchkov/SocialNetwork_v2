import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: "Hi, how are yoy?", likesCount: '15'},
    {id: 2, message: "It's my first post", likesCount: '7'},
    {id: 3, message: "WTF", likesCount: '22'},
]

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

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
