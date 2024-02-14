import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {usersService} from "../../services/usersService";
import PostDetails from "./PostDetails";

const PostsDetails = () => {
    const [postsDetails, setPostsDetails] = useState([])
    const {state:{id}} = useLocation()
    useEffect(() => {
        usersService.getPost(id).then(({data})=>setPostsDetails(data))
    }, []);
    return (
        <div>
            <PostDetails key={postsDetails.id} postsDetails={postsDetails}/>)
        </div>
    );
};

export default PostsDetails;