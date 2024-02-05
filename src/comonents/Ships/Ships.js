import React, {useEffect, useState} from 'react';
import Ship from "../Ship/Ship";

const Ships = () => {
    const [ships,setShips]=useState([])
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                const filteredShips = value.filter(ship => new Date(ship.launch_year).getFullYear() !== 2020);
                setShips(filteredShips);
            })
    }, []);

    return (
        <div>
            {ships.map(ship=><Ship ship={ship}/>)}
        </div>
    );
};

export default Ships;