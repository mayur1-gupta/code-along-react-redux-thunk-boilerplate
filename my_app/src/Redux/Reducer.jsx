import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initState = {
    users:[]
}

export const userOfThunk = createAsyncThunk('users',async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
})

const useringData = createSlice({
    name: 'users',
    initialState: initState,
    reducers:{
        addInitData:(state,action)=>{
            state.users = [...action.payload]
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(userOfThunk.fulfilled,(state,action)=>{
            state.users=action.payload
        })
    }
})

export const Actions = useringData.actions
export const Reducer = useringData.reducer
export const Selectors = (state)=>state.Reducer.users