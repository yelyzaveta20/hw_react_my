import {configureStore} from "@reduxjs/toolkit";

import {characterReducer, episodeReducer} from "./slice";

const store=configureStore({
    reducer:{
        episodes:episodeReducer,
        characters:characterReducer
    }
})
export {store}