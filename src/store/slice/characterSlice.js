import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../services";

// const initialState={
//     characters:[]
// }
// const getByIdCharacters=createAsyncThunk(
//     'characterSlice/getByIdCharacters',
//     async (charactersId, thunkAPI)=>{
//         try {
//             const {data} =characterService.getById(charactersId)
//             return data
//         }catch (e) {
//             return thunkAPI.rejectWithValue(e.response.data);
//         }
//     }
// )
// const characterSlice=createSlice({
//     name:'characterSlice',
//     initialState,
//     reducers:{},
//     extraReducers:builder =>
//         builder
//             .addCase(getByIdCharacters.fulfilled, (state, action) => {
//                 state.characters = action.payload
//             })
//
//
// })
// const {reducer:characterReducer,actions}=characterSlice
// const characterActions={
//     ...actions,
//     getByIdCharacters
// }
// export {characterReducer,characterActions}

const initialState = {
    characters: [],
};

const getByIdCharacters = createAsyncThunk(
    'characterSlice/getByIdCharacters',
    async (charactersId, { rejectWithValue }) => {
        try {
            const { data } = await characterService.getById(charactersId);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder.addCase(getByIdCharacters.fulfilled, (state, action) => {
            state.characters = action.payload;
        }),
});

const { reducer: characterReducer, actions } = characterSlice;
const characterActions = {
    ...actions,
    getByIdCharacters,
};

export { characterReducer, characterActions };