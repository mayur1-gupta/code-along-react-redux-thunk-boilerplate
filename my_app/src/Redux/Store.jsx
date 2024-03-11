import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import { thunk } from "redux-thunk";

export const ThunkStore = configureStore({
    reducer:{
        Reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk)
})