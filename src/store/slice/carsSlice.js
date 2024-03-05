import {createSlice} from "@reduxjs/toolkit";

const initialState={
    cars: [],
    carForUpdate: null,
    carNew:null
};
const carsSlice= createSlice({
    name:'carsSlice',
    initialState,
    reducers:{

        setResponse:(state, action)=>{
           const {data}=action.payload;
           state.cars=data
        }
        ,
        setUpdate:(state, action)=>{
            const {data}=action.payload;
            state.carForUpdate=data
        }

        ,postCarNew:(state, action)=>{
            const {data}=action.payload;
            state.carNew=data
        }

    }
})
const {reducer:carsReducer, actions}=carsSlice
const carsActions={
    ...actions
}
export {
    carsReducer,
    carsActions
}