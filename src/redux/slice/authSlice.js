import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:'auth',
    initialState: {
        isAuth:false,
        user:{}
    },
    reducers:{
        setLogin:(state,action)=>{
            state.isAuth = true;
            state.user = action.payload ;
        },
        setLogout:(state,action)=>{
            state.user = {} ;
        }
    }
});
console.log(authSlice);