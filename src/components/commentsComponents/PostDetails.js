import css from './Post.module.css'
const PostDetails = ({post}) => {
    const {id,userId,title,body}=post
    return (
        <div className={css.Post}>
            <div className={css.div}>id: {id}</div>
            <div className={css.div}>userId: {userId}</div>
            <div className={css.div}>title: {title}</div>
            <div className={css.div}>body: {body}</div>

        </div>
    );
};

export default PostDetails;