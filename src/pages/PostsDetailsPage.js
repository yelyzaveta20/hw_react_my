import React from 'react';
import PostsDetails from "../components/PostsComponents/PostsDetails";
import {Outlet} from "react-router-dom";

const PostsDetailsPage = () => {
    return (
        <div>
            <Outlet/>
            <PostsDetails/>
        </div>
    );
};

export default PostsDetailsPage;