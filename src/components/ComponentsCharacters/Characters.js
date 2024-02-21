import React, {useEffect, useState} from "react";
import {chractersServise} from "../../services/chractersServise";
import Character from "./Character";
import {useLocation} from "react-router-dom";


const Characters = () => {
    let [characters,setCharacters] = useState([]);
    const {state:{charactersId}}=useLocation()
    useEffect(() => {
        chractersServise.getById(charactersId).then(({data})=>setCharacters(data))
        // charactersId.map(character=>chractersServise.getById(character).then(({data})=>setCharacters(prev=>[...prev,data])))
    }, [charactersId]);

    return (
        <div>
            {characters.map(character=><Character key={character.id} characters={character}/>)}

        </div>
    );
};

export default Characters;