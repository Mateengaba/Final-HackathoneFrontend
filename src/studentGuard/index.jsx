import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function StudentGuard({ children }) {
    const token = localStorage.getItem('authToken');
    const user = JSON.parse(localStorage.getItem('authUser'));
    const navigate = useNavigate();
    const isAuthenticated = token && user;

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);


    
    return isAuthenticated && !user.isAdmin ? <>{children}</> : <Navigate to={"/admin"}/>;
}

export default StudentGuard;
