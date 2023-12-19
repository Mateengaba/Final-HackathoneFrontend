import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function AuthGuard({ children }) {
    const token = localStorage.getItem('authToken');
    const user = JSON.parse(localStorage.getItem('authUser'));
    const navigate = useNavigate();
    const isAuthenticated = token && user;

    useEffect(() => {
        if (isAuthenticated) {
            if(user.isAdmin){

                navigate('/admin');
            }else{
                navigate("/dashboard")
            }
        }
    }, [isAuthenticated, navigate]);

    return(
        !isAuthenticated ? <>{children}</> : <Navigate to={"/admin"}/>)
}

export default AuthGuard;