import {configureStore} from "@reduxjs/toolkit";
import {carsReducer} from "./slice/carsSlice";

const store=configureStore({
    reducer:{
        cars:carsReducer
    }
})
export {store}