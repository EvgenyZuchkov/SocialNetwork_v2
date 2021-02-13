import s from "./Post.module.css";

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg"/>
            Post 1
            <div>
                <button>Like</button>
            </div>
        </div>
    )
}

export default Post;