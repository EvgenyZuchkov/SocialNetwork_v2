import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: "Hi, how are yoy?", likesCount: '15'},
        {id: 2, message: "It's my first post", likesCount: '7'},
        {id: 3, message: "WTF", likesCount: '22'},
    ]

    let postsElement = posts.map(p => <Post message = {p.message} likesCount = {p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea cols="50" rows="4">Enter message</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;