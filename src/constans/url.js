const baseURL='https://rickandmortyapi.com/api'
const characters='/character'
const episodes='/episode'
const urls={
    characters:{
        base:characters,
        getById:(id)=>`${characters}/${id}`
    },
    episodes:{
        base: episodes
    }
}
export {baseURL, urls}