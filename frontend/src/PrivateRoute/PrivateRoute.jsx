import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return <div className='text-center'>
            <div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    }

    if(user){
        return children;
    }

    return (
        <Navigate to = "/login" state={{from: location}} replace></Navigate>
    )
}

export default PrivateRoute
