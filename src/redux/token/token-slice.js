import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        id: null,
        email: null,
    },
    token: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        removeUser(state, action) {
            state.email = null;
            state.id = null;
        },
        setToken(state,action) {
            state.token = action.payload
        },
        removeToken(state,action) {
            state.token = null
        }
    },
});

export default userSlice.reducer;

export const { setUser, removeUser, setToken, removeToken } = userSlice.actions;
