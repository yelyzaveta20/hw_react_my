import React from 'react';

const Post = ({post,getPostCurrent}) => {
    const {id,title}=post
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={()=>getPostCurrent(post)}>Details</button>
            <hr/>
        </div>
    );
};

export default Post;