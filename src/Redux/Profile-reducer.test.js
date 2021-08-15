import profileReducer, {addPostActionCreator, deletePost} from "./Profile-reducer";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: '15'},
        {id: 2, message: "It's my first post", likesCount: '7'},
        {id: 3, message: "WTF", likesCount: '22'},
    ]
}
test('new post should be added', () => {
    let action = addPostActionCreator('it-kamasutra.com');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4)
});

test('message should be correct', () => {
    let action = addPostActionCreator('it-kamasutra.com');
    let newState = profileReducer(state, action)
    expect(newState.posts[3].message).toBe('it-kamasutra.com')
})

test('post should be delete', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
})