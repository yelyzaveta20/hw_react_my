import {useNavigate} from "react-router-dom";

import css from './Comment.module.css'
const Comment = ({comment}) => {
    const {id,postId,name,email,body}=comment
    const navigate=useNavigate()
    return (
        <div className={css.Comment}>
        <div className={css.div}>id: {id}</div>
        <div className={css.div}>postId: {postId}</div>
        <div className={css.div}>name: {name}</div>
        <div className={css.div}>email: {email}</div>
        <div className={css.div}>body: {body}</div>
            <button onClick={()=>{
                navigate('posts', {state:{userId:postId}})
            }}>Details</button>

        </div>
    );
};

export default Comment;