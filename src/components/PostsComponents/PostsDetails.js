import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {usersService} from "../../services/usersService";
import PostDetails from "./PostDetails";

const PostsDetails = () => {
    const [postsDetails, setPostsDetails] = useState([])
    const {state:{post}} = useLocation()
    // useEffect(() => {
    //     usersService.getPost(id).then(({data})=>setPostsDetails(data))
    // }, []);
    return (
        <div>
            <PostDetails key={post.id} post={post}/>)
        </div>
    );
};

export default PostsDetails;