import { combineReducers, configureStore } from "@reduxjs/toolkit";
import caseSlice from "./case/case-slice";
import moviesSlice from "./movies/movies-slice";
import siteLanguageSlice from "./site-language/site-language-slice";
import userSlice from "./token/token-slice";

const rootReducer = combineReducers({
    user: userSlice,
    movies: moviesSlice,
    case: caseSlice,
    siteLanguage: siteLanguageSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});
