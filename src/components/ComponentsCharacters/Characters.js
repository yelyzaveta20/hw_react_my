import {useState} from "react";


const Characters = ({characters}) => {
    const [character, setCharscters] = useState(null)

    return (
        <div>
            {character}
        </div>
    );
};

export default Characters;