import React from 'react';
import Сomment from "./Сomment";


const Сomments = ({comments}) => {
    return (
        <div>
            {comments.map(comment=><Сomment key={comments.id} comment={comment}/>)}
        </div>
    );
};

export default Сomments;