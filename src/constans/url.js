const baseURL='http://owu.linkpc.net/carsAPI/v1'
const cars='/cars'
const url={
    cars:{
        base:cars,
        getById:(id)=>`${cars}/${id}`
    }
}
export {
    baseURL,
    url
}