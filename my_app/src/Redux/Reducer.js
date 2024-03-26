import { createSlice } from "@reduxjs/toolkit";

const list = createSlice({
    name:"list",
    initialState:0,
    reducers:{
        inc: state => state + 1,
        dec: state => state - 1
        
    }
})

export const listAction = list.actions;
export const listReducer = list.reducer;
export const listSel = (state) => state.listReducer  