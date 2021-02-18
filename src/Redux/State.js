let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: '15'},
                {id: 2, message: "It's my first post", likesCount: '7'},
                {id: 3, message: "WTF", likesCount: '22'},
            ],
            newPostText: 'Hello',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych', avatar: 'https://demiart.ru/forum/journal_uploads13/j2406363_1591724080_0.jpg'},
                {id: 2, name: 'Valera', avatar: 'https://www.meme-arsenal.com/memes/0b37d82bcfd11cb3196fa5329f3bff0f.jpg'},
                {id: 3, name: 'Sasha', avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'},
                {id: 4, name: 'Lena', avatar: 'https://cs9.pikabu.ru/post_img/big/2020/03/30/6/1585562132190522557.jpg'},
                {
                    id: 5,
                    name: 'Vika',
                    avatar: 'https://i.pinimg.com/originals/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg'
                },
                {id: 6, name: 'Egor', avatar: 'https://cs7.pikabu.ru/post_img/big/2018/10/20/9/154004999513599819.jpg'},
            ],
            messages: [
                {id: 1, message: 'Hello, i am busy'},
                {id: 2, message: 'No, thank you'},
                {id: 3, message: 'Goodnight'},
                {id: 4, message: 'Ok'},
                {id: 5, message: 'Yo, man'},
                {id: 6, message: 'Yo'},
            ],
            newMessageText: 'Enter your message'
        },
        sidebarPage: {
            friends: [
                {id: 1, name: 'Dimych', avatar: 'https://demiart.ru/forum/journal_uploads13/j2406363_1591724080_0.jpg'},
                {id: 2, name: 'Lena', avatar: 'https://cs9.pikabu.ru/post_img/big/2020/03/30/6/1585562132190522557.jpg'},
                {
                    id: 3,
                    name: 'Vika',
                    avatar: 'https://i.pinimg.com/originals/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg'
                },
            ]
        },
    },
    getState () {
        return this._state
    },
    _callSubscriber () {
        console.log()
    },
    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    addMessage () {
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state)
    },
    updateNewMessageText (newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state)
    },
    subscribe (observer) {
        this._callSubscriber = observer
    }
}

export default store;