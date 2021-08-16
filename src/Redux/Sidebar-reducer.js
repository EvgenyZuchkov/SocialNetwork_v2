let initialState = {
    friends: [
        {id: 1, name: 'Dimych', avatar: 'https://demiart.ru/forum/journal_uploads13/j2406363_1591724080_0.jpg'},
        {
            id: 2,
            name: 'Lena',
            avatar: 'https://cs9.pikabu.ru/post_img/big/2020/03/30/6/1585562132190522557.jpg'
        },
        {
            id: 3,
            name: 'Vika',
            avatar: 'https://i.pinimg.com/originals/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg'
        },
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;