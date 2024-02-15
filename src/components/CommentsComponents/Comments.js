import {useEffect, useState} from "react";
import {usersService} from "../../services/usersService";
import {useLocation} from "react-router-dom";
import Comment from "./Comment";

const Comments = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        usersService.getComments().then(({data})=>setComments(data))
    }, []);
    console.log(comments);
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;