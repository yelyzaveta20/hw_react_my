const baseURL='owu.linkpc.net/carsAPI/v2'
const cars='/cars'
const auth='/auth'
const users='/users'

const urls={
    cars:{
        base:cars,
        getById:(id)=>`${cars}/${id}`
    },
    auth:{
    login:auth,
        register:users,
        me:`${auth}/me`
    }
}
export {baseURL,urls}