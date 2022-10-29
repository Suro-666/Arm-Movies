import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    id: '',
    token: '',
}

const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        changeToken(state, action) {
            state.email = action.payload.email;
            state.id = action.payload.uid;
            state.token = action.payload
        },
    },
});

export default tokenSlice.reducer;

export const { changeToken, changeTokenState } = tokenSlice.actions;
