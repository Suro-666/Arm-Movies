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
        setUser(state, action) {
            state.email = action.payload.email;
            state.id = action.payload.uid;
            state.token = action.payload.token;
        },
    },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;
