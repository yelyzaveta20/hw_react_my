import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {usersService} from "../../services/usersService";
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const {state:{userId}} = useLocation()
    useEffect(() => {
        usersService.getPost(userId).then(({data})=>setPosts(data))
    }, []);
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;