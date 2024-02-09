import React, {useEffect, useState} from 'react';

import {carService} from "../service/carService";
import CarForm from "./CarForm";
import Cars from "./Cars";

const CarsComponents = () => {
    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [carUpdate,setCarUpdate]=useState(null)
    const [carDelete,setCarDelete]=useState(null)
    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, [trigger]);

    const deleteCar=(id)=>{
        carService.delete(id)
        setTrigger((prev) => !prev);
    }
    return (
        <div>
            <CarForm setTrigger={setTrigger} carDelete={carDelete} setCarDelete={setCarDelete} carUpdate={carUpdate} setCarUpdate={setCarUpdate}/>
            <hr/>
            <Cars cars={cars} setCarUpdate={setCarUpdate} setCarDelete={setCarDelete}/>
        </div>
    );
};

export default CarsComponents;