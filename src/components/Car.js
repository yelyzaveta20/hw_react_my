import React, {useEffect} from 'react';
import {carService} from "../services";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../store";

const Car = ({car}) => {
    const dispatch = useDispatch();
    const {cars,carForUpdate } = useSelector(state => state.cars);
    const {id,brand,price,year}=car
    const deletecar =async ()=>{
       await carService.deleteCar(id)
    }
    return (
        <div>
        <div>id : {id}</div>
        <div>brand : {brand}</div>
        <div>price : {price}</div>
        <div>year : {year}</div>
            <button onClick={carForUpdate}>update</button>
            <button onClick={deletecar}>delete</button>
        </div>
    );
};

export {Car};