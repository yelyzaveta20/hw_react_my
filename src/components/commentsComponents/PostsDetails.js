import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {commentsServices} from "../../servises/commentsServices";
import PostDetails from "./PostDetails";

const PostsDetails = () => {
    const [post, setPosts] = useState([])
    const {state:{userId}} = useLocation()
    // console.log(posts);
    // console.log({state:{postId}});
    useEffect(() => {
        commentsServices.getById(userId).then(({data})=>setPosts(data))
    }, [userId]);
    return (
        <div>
            {/*{posts.map(post=><PostDetails key={post.id} post={post}/>)}*/}
            <PostDetails key={post.id} post={post}/>
        </div>
    );
};

export default PostsDetails;