import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    caseState: [],
};

const caseSlice = createSlice({
    name: "case",
    initialState,
    reducers: {
        addMovieForCase(state, action) {
            state.caseState.push(action.payload);
        },
        removeCase(state, action) {
            state.caseState = [];
        },
        removeTargetMovie(state, action) {
            state.caseState = state.caseState.filter(
                (movie) => movie.name !== action.payload.name
            );
        },
    },
});

export default caseSlice.reducer;

export const { addMovieForCase, removeCase, removeTargetMovie } =
    caseSlice.actions;
