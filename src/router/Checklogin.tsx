import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

function Checklogin() {
    const navigate = useNavigate();
    const user = localStorage.getItem('user');
    useEffect(() => {
        if (!user) {
            navigate('/');
            return;
        }
    }, [navigate, user]);
    return (
        <>
            <Outlet />
		</>
    )
}

export default Checklogin