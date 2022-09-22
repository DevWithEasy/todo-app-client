import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet} from 'react-router';

const ProtectedRoute = () => {
    const user = useSelector(state=>state.auth.user)
    return (
        <div>
            {
                user.name ? <Outlet/> : <Navigate to ='/login' replace />
            }
        </div>
    );
};

export default ProtectedRoute;