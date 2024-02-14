const baseURL='https://jsonplaceholder.typicode.com'
const users='/users'

const urls={
    users:{
        base:users,
        getById:(id)=>`${users}/${id}`,
        getPost:(id)=>`${users}/${id}/posts`
    }
}
export {baseURL, urls}