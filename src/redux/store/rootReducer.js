import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "../slice/authSlice";
export const rootReducer = combineReducers({
    auth:authSlice.reducer,
})