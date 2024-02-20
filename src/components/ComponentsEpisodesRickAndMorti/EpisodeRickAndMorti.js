import css from './Episode.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import Characters from "../ComponentsCharacters/Characters";
const EpisodeRickAndMorti = ({episode}) => {
    let navigate = useNavigate();
    const {id,name, episode:episodeOn,characters}=episode
    const getCharacterNumber = (characterUrl) => {
        const match = characterUrl.match(/\/character\/(\d+)/);
        return match ? match[1] : null;
    };
    const charactersId = characters.map((characterUrl) => getCharacterNumber(characterUrl));
    const handle = () => {
        navigate('/characters', {state:{charactersId}})
    }
    return (
        <div className={css.Episode}>

            <div onClick={handle}>
                <div className={css.div}>id :{id}</div>
                <div className={css.div}>name :{name}</div>
                <div className={css.div}>episode :{episodeOn}</div>
            </div>

        </div>
    );
};

export default EpisodeRickAndMorti;