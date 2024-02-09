import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../service/carService";

const CarForm = ({setTrigger,setCarUpdate,carUpdate,setCarDelete,carDelete}) => {
    const {reset,formState:{isValid},setValue,handleSubmit,register}=useForm()
    useEffect(() => {
        if (carUpdate){
            setValue('brand', carUpdate.brand, {shouldValidate: true})
            setValue('price', carUpdate.price, {shouldValidate: true})
            setValue('year', carUpdate.year, {shouldValidate: true})
        }


    }, [carUpdate]);
    const save =  (item) => {
       carService.create(item)
        setTrigger(prev=>!prev)
    reset()
    }
    // const update = (car,id) => {
    //   carService.update()
    // }
    const deleteCar = (id) => {
        carService.delete(id);
        setTrigger((prev) => !prev);
        reset();
    };
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input placeholder={'brand'} type="text" {...register('brand')}/>
                <input placeholder={'price'} type="text" {...register('price',{valueAsNumber: true})}/>
                <input placeholder={'year'} type="text" {...register('year',{valueAsNumber: true})}/>
                <button>save</button>
            </form>
        </div>
    );
};

export default CarForm;