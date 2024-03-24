import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const PrivatePage = ({ children }) => {

    const user = useSelector((state) => state.authReducer.user)
    if (!user) {
        return <Navigate to="/" />
    }
    return children

}

export default PrivatePage