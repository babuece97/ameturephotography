import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import {auth} from '../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const RequireAuth = ({children}) => {
     const [user,loading] = useAuthState(auth);
     //const [user] =useFirebase;
     console.log(user);
     
    const location = useLocation();
    if (loading ){
        return
    }
    //<Navigate to="/login" state={{ from: location }} replace />;
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;