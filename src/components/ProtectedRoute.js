import React from 'react';
import { Navigate, Outlet} from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../redux/actions/authAction';

const ProtectedRoute = () => {
    const dispatch = useDispatch()
    const stateUser = useSelector(state=>state.auth.user)
    const user = JSON.parse(localStorage.getItem('user'));

    if(user && !stateUser.name) {
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