import { configureStore } from "@reduxjs/toolkit";

import cvReducer from "../app/slices/cv.slice";
import uiReducer from "../app/slices/ui.slice";

export const store = configureStore({
    reducer: {
        cv: cvReducer,
        ui: uiReducer,
    },
});

