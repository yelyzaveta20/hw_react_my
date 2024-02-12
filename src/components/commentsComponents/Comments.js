import {useEffect, useState} from "react";
import {commentsServices} from "../../servises/commentsServices";
import Comment from "./Comment";

const Comments = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        commentsServices.getAll.then(({data})=>setComments(data))
    }, []);
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;