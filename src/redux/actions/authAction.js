import { authSlice } from "../slice/authSlice";
const {actions:auth} = authSlice;

export const loginAction = (user)=>(dispatch)=>{
    dispatch(auth.setLogin(user))
}
export const logoutAction = ()=>(dispatch)=>{
    dispatch(auth.setLogout())
}