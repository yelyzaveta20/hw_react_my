import {createSlice} from "@reduxjs/toolkit";

const initialState={
    car:{}
};
const carForUpdateSlice=createSlice({
    name:'carForUpdateSlice',
    initialState,
    reducers:{
        setUpdate:(state, action)=>{
            const {car, id}=action.payload
            state.car=car
        }
    }
})