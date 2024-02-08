import React, {useEffect, useState} from 'react';

import CommentForm from "./CommentForm";
import Сomments from "./Сomments";
import {commentService} from "../service/commentService";

const СommentsContainer = () => {

    const[comments,setComments]=useState([])

    useEffect(() => {
        commentService.getAll().then(({data})=>setComments(data))
    }, []);
    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Сomments comments={comments}/>
        </div>
    );
};

export default СommentsContainer;