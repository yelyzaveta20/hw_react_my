import React from 'react';

const Сomment = ({comment}) => {
    const {name,body,email,id}=comment
    console.log(comment);
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
        <div>body:{body}</div>
        <div>email:{email}</div>
            <hr/>
        </div>
    );
};

export default Сomment;