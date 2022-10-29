import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./token/token-slice";

const rootReducer = combineReducers({
    user:userSlice
}) 

export const store = configureStore({
    reducer:rootReducer
})