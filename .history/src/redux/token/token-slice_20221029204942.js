import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        changeToken(state, action) {
            state.privateUser = action.payload;
        },
    },
});

export default tokenSlice.reducer;

export const { changeToken, changeTokenState } = tokenSlice.actions;