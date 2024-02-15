import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {usersService} from "../../services/usersService";
import PostDetails from "./PostDetails";

const PostsDetails = () => {

    const {state:{post}} = useLocation()

    return (
        <div>
            <PostDetails key={post.id} post={post}/>)
        </div>
    );
};

export default PostsDetails;