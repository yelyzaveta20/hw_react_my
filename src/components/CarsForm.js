import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services";

const CarsForm = () => {
    const {register, reset, handleSubmit, formState: {isValid, errors}, setValue} = useForm({
        mode: 'all'
    });
    const save = async (car) => {
        await carService.createCar(car)
        reset()

    }
    const update = async (car) => {
        await carService.updateCar(car.id, car)
        reset()
    }
    return (
        <form onSubmit={handleSubmit(car ? update : save)}>
            <input type='text' placeholder={'price'}/>
            <input type='text' placeholder={'brand'}/>
            <input type='text' placeholder={'year'}/>
            <button>Add</button>
        </form>
    );
};

export {CarsForm};