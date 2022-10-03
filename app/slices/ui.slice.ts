import { createSlice } from '@reduxjs/toolkit';

const initialState = {}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
       toggleContactDetails: (state) => {
            state = false;
        },

    },
});

export const { toggleContactDetails } = uiSlice.actions;



export default uiSlice.reducer;
