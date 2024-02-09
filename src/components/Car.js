import React from 'react';

const Car = ({car,setCarUpdate,setCarDelete}) => {
    const {id,brand,price,year}=car
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year :{year}</div>
            <button onClick={()=>setCarUpdate(car)}>update</button>
            <button onClick={()=>setCarDelete(car)}>delete</button>
        </div>
    );
};

export default Car;