
const PostDetails = ({postsDetails}) => {
    const {id, userId, title,body}=postsDetails
    return (
        <div>
        <div>id :{id}</div>
        <div>userId :{userId}</div>
        <div>title :{title}</div>
        <div>body :{body}</div>
            <hr/>
        </div>
    );
};

export default PostDetails;