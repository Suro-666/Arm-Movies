import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: "token",
    initialState: {
        privateUser: {
            id: "",
            name: "",
            surname: "",
            email: "",
            token: "",
        },
    },
    reducers: {
        changeToken(state, action) {
            state.privateUser = action.payload;
        },
    },
});

export default tokenSlice.reducer;

export const { changeToken, changeTokenState } = tokenSlice.actions;
