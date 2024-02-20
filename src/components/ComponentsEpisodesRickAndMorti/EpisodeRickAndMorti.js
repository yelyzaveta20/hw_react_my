import css from './Episode.module.css'
import {NavLink} from "react-router-dom";
import Characters from "../ComponentsCharacters/Characters";
const EpisodeRickAndMorti = ({episode}) => {
    const {id,name, episode:episodeOn,characters}=episode
    // characters.map(character=>fetch(character).then((data)=>data.json()).then((res)=>{
    //    const
    // }))
    // characters.map(character=><Characters character={character}/>)
    const getCharacterNumber = (characterUrl) => {
        const match = characterUrl.match(/\/character\/(\d+)/);
        return match ? match[1] : null;
    };
    const charactersId = characters.map((characterUrl) => getCharacterNumber(characterUrl));
    return (
        <div className={css.Episode}>

            <div>
                <div className={css.div}>id :{id}</div>
                <div className={css.div}>name :<NavLink to={'/character'} state={characters}>{name}</NavLink></div>
                <div className={css.div}>episode :{episodeOn}</div>
            </div>
            {/*<ul>*/}
            {/*    {charactersId.map((charactersId, id) => (*/}
            {/*        <li key={id}>{charactersId}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            {charactersId.map((charactersIdOne,id)=><Characters charactersIdOne={charactersIdOne}/>)}

        </div>
    );
};

export default EpisodeRickAndMorti;