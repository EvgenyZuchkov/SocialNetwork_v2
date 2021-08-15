import React from 'react'
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddPostForm from "./AddPostForm";

const MyPosts = React.memo((props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostForm addPost={props.addPost}/>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
})

export default MyPosts;