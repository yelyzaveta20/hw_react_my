import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../store";

const CarsForm = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { isValid, errors },
        setValue,
    } = useForm({
        mode: 'all'
    });
    const dispatch = useDispatch();
    const { carForUpdate } = useSelector((state) => state.cars);

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, { shouldValidate: true });
            setValue('price', carForUpdate.price, { shouldValidate: true });
            setValue('year', carForUpdate.year, { shouldValidate: true });
        }
    }, [carForUpdate, setValue]);

    const save = async (car) => {
        await carService.createCar(car);
        reset();
    };

    const update = async (car) => {
        await carService.updateCar(carForUpdate.id, car);
        dispatch(carsActions.setUpdate(null));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input
                type='text'
                placeholder='brand'
                {...register('brand', {
                    required: 'Brand is required',
                })}
            />
            {errors.brand && <div>{errors.brand.message}</div>}

            <input
                type='text'
                placeholder='price'
                {...register('price', {
                    required: 'Price is required',
                })}
            />
            {errors.price && <div>{errors.price.message}</div>}

            <input
                type='text'
                placeholder='year'
                {...register('year', {
                    required: 'Year is required',
                })}
            />
            {errors.year && <div>{errors.year.message}</div>}

            <button type="submit">{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarsForm};