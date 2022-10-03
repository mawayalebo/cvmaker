import { configureStore } from "@reduxjs/toolkit";

import cvReducer from "../app/slices/cv.slice";


export const store = configureStore({
    reducer: {
        cv: cvReducer,
    },
});

