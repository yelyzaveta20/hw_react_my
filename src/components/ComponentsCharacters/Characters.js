import React, {useEffect, useState} from "react";
import {chractersServise} from "../../services/chractersServise";
import Character from "./Character";
import {useLocation} from "react-router-dom";


const Characters = () => {
    let [characters,setCharacters] = useState([]);
    const {state:{charactersId}}=useLocation()
    useEffect(() => {
        charactersId.map(character=>chractersServise.getById(character).then(({data})=>setCharacters(prev=>[...prev,data])))
    }, []);

    return (
        <div>
            {characters.map(character=><Character key={character.id} characters={character}/>)}

        </div>
    );
};

export default Characters;