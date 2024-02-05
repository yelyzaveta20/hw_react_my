import React from 'react';

const RickMorti = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.id} {props.species} {props.status} {props.gender}</p>
            <img
                src={props.img}
                alt={props.name}/>
        </div>
    );
};

export default RickMorti;