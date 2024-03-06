import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {characterActions} from "../../store/slice";
import {Character} from "./Character";

const CharactersList = () => {
    const { characters } = useSelector((state) => state.characters);
    const { state: { charactersId } } = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(characterActions.getByIdCharacters(charactersId));
    }, [charactersId]);
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={()=>navigate(-1)}>Back</button>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {CharactersList};