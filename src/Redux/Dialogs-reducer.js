const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych', avatar: 'https://demiart.ru/forum/journal_uploads13/j2406363_1591724080_0.jpg'},
        {id: 2, name: 'Valera', avatar: 'https://www.meme-arsenal.com/memes/0b37d82bcfd11cb3196fa5329f3bff0f.jpg'},
        {id: 3, name: 'Sasha', avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'},
        {id: 4, name: 'Lena', avatar: 'https://cs9.pikabu.ru/post_img/big/2020/03/30/6/1585562132190522557.jpg'},
        {id: 5, name: 'Vika', avatar: 'https://i.pinimg.com/originals/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg'},
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
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return  {
                ...state,
                newMessageBody: action.body,
            }
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}],
            }
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;