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
            console.log(state.email)
            console.log(state.id)
            console.log(state.token)
        },
    },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;
