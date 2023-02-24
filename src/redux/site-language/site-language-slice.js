import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: 'en'
}

const siteLanguageSlice = createSlice({
    name: 'siteLng',
    initialState,
    reducers: {
        changeSiteLngState(state,action) {
            console.log(action.payload);
            state.language = action.payload
        }
    }
})


export default siteLanguageSlice.reducer;

export const { changeSiteLngState } = siteLanguageSlice.actions;