import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const token = !!sessionStorage.getItem('token')   
    return token ? <Outlet/> : <Navigate to="/" />;        //navigate to login if token are not available 
};

export const PrivateRoutes = () => {
    const token = sessionStorage.getItem('token')
    return !token ?<Outlet/> : <Navigate to="/dashboard" />;   
}

export default PrivateRoute;