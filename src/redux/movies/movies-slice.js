import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    moviesGenre: [
        'thriller',
        'comedy',
        'drama',
        'fantasy',
        'crime',
        'detective',
        'history',
    ],
    movies: [],
    filteredMovie: null,
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        changeMoviesState(state, action) {
            state.movies = action.payload;
        },
        changeFilteredMovies(state,action) {
            state.filteredMovie = action.payload
        },
    },
});

export default moviesSlice.reducer;

export const { changeMoviesState, changeFilteredMovies } = moviesSlice.actions;
