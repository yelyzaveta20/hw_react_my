import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carService} from "../services";
import {carsActions} from "../store";
import {Car} from "./Car";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars);
    // const [cars, setCars] = useState()
    useEffect(() => {
        carService.getAll().then(({data})=>dispatch(carsActions.setResponse({data})))
    }, []);
    return (
        <div>
            {cars?.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};