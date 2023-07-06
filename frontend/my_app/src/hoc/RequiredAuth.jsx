import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const RequiredAuth = ({ children }) => {
    const data=JSON.parse(localStorage.getItem("user_detail"))
    const location = useLocation();
    const from = {
        pathname: location.pathname,
    }

    if (!data?.token ){
        return <Navigate to="/login" state={from} replace />;
    }
    
    return children;
    
}

export default RequiredAuth