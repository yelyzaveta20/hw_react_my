import React from 'react';

const PostDetails = ({postDetails}) => {
    const {userId,id,title,body}=postDetails
    return (
        <div>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};

export default PostDetails;