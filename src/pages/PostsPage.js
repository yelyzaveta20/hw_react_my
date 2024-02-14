import React from 'react';
import Posts from "../components/PostsComponents/Posts";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            <Outlet/>
            <Posts/>
        </div>
    );
};

export default PostsPage;