import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const token = localStorage.getItem('authToken');
    const user = JSON.parse(localStorage.getItem('authUser'));
    const navigate = useNavigate();
    const isAuthenticated = token && user ;

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }else{
            
        }
    }, [isAuthenticated, navigate]);

    
    return isAuthenticated && user.isAdmin ? <>{children}</> : <Navigate to={"/dashboard"}/>;
}

export default ProtectedRoute;
