import React, {useEffect, useState} from "react";
import {chractersServise} from "../../services/chractersServise";
import Character from "./Character";


const Characters = ({charactersIdOne}) => {
    let [characters,setCharacters] = useState([]);
    useEffect(() => {
        chractersServise.getById(charactersIdOne).then(({data})=>setCharacters(data))
    }, []);

    // const {id,name,image}=characters
    return (
        <div>
            <Character characters={characters}/>
            {/*{characters.map(character=><Character key={character.id} character={character}/>)}*/}
        </div>
    );
};

export default Characters;