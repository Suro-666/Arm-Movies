import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    id: null,
    token: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeToken(state, action) {
            state.email = action.payload.email;
            state.id = action.payload.uid;
            state.token = action.payload.token;
            console.log(state).initialState
        },
    },
});

export default userSlice.reducer;

export const { changeToken, changeTokenState } = userSlice.actions;
