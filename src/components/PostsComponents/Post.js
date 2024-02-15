import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {id,userId,title}=post
    const navigate =useNavigate()
    return (
        <div>
        <div>title: {title} <button onClick={()=>navigate(`details`,{state:{post}})}>details</button></div>
        </div>
    );
};

export default Post;