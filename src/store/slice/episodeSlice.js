import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";


const initialState = {
    episodes: [],
    prevPage: null,
    nextPage: null,
};

const getAllEpisodes = createAsyncThunk(
    'episodeSlice/getAllEpisodes',
    async (page, thunkAPI) => {
        try {
            const {data} = await episodeService.getAll(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getAllEpisodes.fulfilled, (state, action) => {
                state.episodes = action.payload.results;
                state.prevPage = action.payload.info.prev;
                state.nextPage = action.payload.info.next;
            })
            // .addCase(getAllEpisodes.rejected, (state, action) => {
            //     console.error('Error fetching episodes:', action.payload);
            // }),
});

const { reducer: episodeReducer, actions } = episodeSlice;

const episodeActions = {
    ...actions,
    getAllEpisodes,
};

export { episodeActions, episodeReducer };

