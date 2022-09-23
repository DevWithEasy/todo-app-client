import React from 'react';
import { Navigate, Outlet} from 'react-router';
import { useDispatch } from 'react-redux';
import { loginAction } from '../redux/actions/authAction';

const ProtectedRoute = () => {
    // const user = useSelector(state=>state.auth.user)
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
        dispatch(loginAction(user))
    }
    return (
        <div>
            {
                user.name ? <Outlet/> : <Navigate to ='/login' replace />
            }
        </div>
    );
};

export default ProtectedRoute;