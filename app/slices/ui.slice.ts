import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentEmployer: false
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



export default uiSlice.reducer;
