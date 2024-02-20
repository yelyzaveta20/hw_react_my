import css from './Episode.module.css'
import {NavLink} from "react-router-dom";
import Characters from "../ComponentsCharacters/Characters";
const EpisodeRickAndMorti = ({episode}) => {
    const {id,name, episode:episodeOn,characters}=episode
    // characters.map(character=>fetch(character).then((data)=>data.json()).then((res)=>{
    //    const
    // }))
    // characters.map(character=><Characters character={character}/>)

    return (
        <div className={css.Episode}>

            <div >
                <div className={css.div}>id :{id}</div>
                <div className={css.div}>name :<NavLink to={'/character'}>{name}</NavLink></div>
                <div className={css.div}>episode :{episodeOn}</div>
            </div>
            {/*<Characters episode={episode}/>*/}
        </div>
    );
};

export default EpisodeRickAndMorti;