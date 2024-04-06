import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';


const ProvetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()
    // console.log(location);

    if (loading) {
        return (
            <div className='absolute top-1/2 left-1/2'>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default ProvetRoute;