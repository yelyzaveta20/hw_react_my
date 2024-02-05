import React from 'react';

const SimpsonsFamily = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <img
                src={props.img}
                alt={props.name}/>
        </div>
    );
};

export default SimpsonsFamily;