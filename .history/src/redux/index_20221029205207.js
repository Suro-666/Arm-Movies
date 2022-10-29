import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./token/token-slice";

const rootReducer = combineReducers({
    user:tokenSlice
}) 

export const store = configureStore({
    reducer:rootReducer
})