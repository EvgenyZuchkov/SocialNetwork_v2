import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea cols="50" rows="4"></textarea><br/>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message = "Hi, how are yoy?" likesCount = '15'/>
                <Post message = "It's my first post" likesCount = '7'/>
                <Post message = "WTF" likesCount = '22'/>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;