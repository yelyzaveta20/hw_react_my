import React from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../service/commentService";

const CommentForm = ({setComments}) => {
    const {reset, handleSubmit,register} =useForm()
    const create= (date) => {
        commentService.create(date).then(({data})=>setComments(prev=>[...prev,data]))
        reset()
    };
    return (
        <div>
            <form onSubmit={handleSubmit(create)}>
                <input type='text' placeholder={'name'} {...register('name')}/>
                <input type='text' placeholder={'body'} {...register('body')}/>
                <input type='text' placeholder={'email'} {...register('email')}/>

                <button>save</button>
            </form>
        </div>
    );
};

export default CommentForm;