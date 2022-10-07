import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentEmployer: true
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
       toggleCurrent: (state) => {
            state.currentEmployer = !state.currentEmployer;
        },

    },
});

export const { toggleCurrent } = uiSlice.actions;

export const selectCurrent = (state: any) => {
    return state
}

export default uiSlice.reducer;
