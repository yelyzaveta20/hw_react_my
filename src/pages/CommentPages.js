import Comments from "../components/commentsComponents/Comments";
import {Outlet} from "react-router-dom";

const CommentPages = () => {
    return (
        <div>
            <Outlet/>
           <Comments/>
        </div>
    );
};

export default CommentPages;