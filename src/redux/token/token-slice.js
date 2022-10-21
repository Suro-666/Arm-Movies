import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: "toolkit",
    initialState: { token: false },
    reducers: {
        changeToken(state, action) {
            state.token = action.payload;
        },
    },
});

export default tokenSlice.reducer;

export const { changeToken } = tokenSlice.actions;
