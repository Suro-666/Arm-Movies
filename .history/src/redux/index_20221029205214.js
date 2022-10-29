import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./token/token-slice";

const rootReducer = combineReducers({
    user:userSlice
}) 

export const store = configureStore({
    reducer:rootReducer
})