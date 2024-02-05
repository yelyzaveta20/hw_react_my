import React, {useEffect, useState} from 'react';

import Post from "../Post/Post";
import {postService} from "../../service/postService";
import PostDetails from "../PostDetails/PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails]=useState(null)
    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))

    }, []);
    const getPostCurrent=(post)=>{
        setPostDetails(post)
    }
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post} getPostCurrent={getPostCurrent}/>)}
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export default Posts;