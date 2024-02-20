const baseURL='https://rickandmortyapi.com/api'
const character='/character'
const episode='/episode'
const urls={
    episode:{
        base:episode,
        // getById:(id)=>`${episode}/${id}`
    }
    ,
    character:{
        base:character,
        getById:(id)=>`${character}/${id}`
    }

}
export {baseURL,urls}