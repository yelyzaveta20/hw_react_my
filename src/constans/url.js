const baseURL='https://jsonplaceholder.typicode.com'
const users='/users'
const posts='/posts'
const comments='/comments'

const urls={
    users:{
        base:users,
        getById:(id)=>`${users}/${id}`,
        getPost:(id)=>`${users}/${id}${posts}`,

    },
    comments:{
        getComments:(postId)=>`${posts}/${postId}${comments}`,
        base:comments
    }
}
export {baseURL, urls}