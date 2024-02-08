import React from 'react';

const Comment = ({comment}) => {
    const {name, body, email, id}  = comment
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <hr/>
        </div>
    );
};

export default Comment;