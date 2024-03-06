import {useNavigate} from "react-router-dom";
import css from './Episode.module.css'

const Episode = ({episode}) => {
    const { id, name, episode: episodeName, characters } = episode;
    const navigate = useNavigate();

    const getCharacterNumber = (characterUrl) => {
        const match = characterUrl.match(/\/character\/(\d+)/);
        return match ? match[1] : null;
    };

    const charactersId = characters.map((characterUrl) => getCharacterNumber(characterUrl));

    const handle = () => {
        navigate('/characters', { state: { charactersId } });
    };
    return (
        <div className={css.Episode}>
            <div onClick={handle}>
                <div className={css.div}>id :{id}</div>
                <div className={css.div}>name :{name}</div>
                <div className={css.div}>episodeName :{episodeName}</div>

            </div>
        </div>

    );
};

export {Episode};