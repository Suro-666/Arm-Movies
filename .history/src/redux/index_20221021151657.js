import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./token/token-slice";

const rootReducer = combineReducers({
    token:tokenSlice
}) 

export const store = configureStore({
    reducer:rootReducer
})