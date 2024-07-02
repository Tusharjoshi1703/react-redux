import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        increment:(state)=>{
            state.value+=1
            //here we are mutating or changing the state value which is not allowed in react but in redux 
            //we have something called immer library
        },
        decrement:(state)=>{
            state.value-=1
        },
    }
})
export const {increment,decrement}=counterSlice.actions;
export default  counterSlice.reducer 