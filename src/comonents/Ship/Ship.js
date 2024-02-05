import React from 'react';

const Ship = ({ship}) => {
    const {mission_name,launch_year,mission_patch_small,links}=ship
    return (
        <div>
            <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>
            <img src={links.mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Ship;