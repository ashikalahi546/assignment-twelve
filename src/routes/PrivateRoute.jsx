import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../component/auth/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='flex justify-center my-6'> <span className="loading loading-spinner text-primary "></span></div>
    }
    if(user){
        return children
    }
return <Navigate to='/login' state={location.pathname} replace ={true}></Navigate>
};

export default PrivateRoute;