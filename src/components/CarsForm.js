import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services";
import {useDispatch, useSelector} from "react-redux";

const CarsForm = () => {
    const {register, reset, handleSubmit, formState: {isValid, errors}, setValue} = useForm({
        mode: 'all'
    });
    const dispatch = useDispatch();
    const {carForUpdate, carNew} = useSelector(state => state.cars);
    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue]);
    const save = async (carNew) => {
        await carService.createCar(carNew)
        reset()

    }
    const update = async (carForUpdate) => {
        await carService.updateCar(carForUpdate.id, carForUpdate)
        reset()
    }
    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type='text' placeholder={'price'}/>
            <input type='text' placeholder={'brand'}/>
            <input type='text' placeholder={'year'}/>
            <button>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarsForm};