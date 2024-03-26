import { configureStore } from "@reduxjs/toolkit";
import { listReducer } from "./Reducer"


export const Store = configureStore({
    reducer:{
        listReducer,
    }
})