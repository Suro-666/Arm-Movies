import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: "token",
    initialState: {
        privateUser: {
            id: "",
            name: "",
            surname: "",
            email: "",
            password: "",
            token: "",
            userToken: "",
        },
    },
    reducers: {
        changeToken(state, action) {
            state.privateUser = action.payload;
        },
        changeTokenState(state, action) {
            state.privateUser.userToken = action.payload;
        },
    },
});

export default tokenSlice.reducer;

export const { changeToken, changeTokenState } = tokenSlice.actions;
