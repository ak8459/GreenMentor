
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../Redux/authReducer/action';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const dispatch = useDispatch();
    const navigate = useNavigate()
    // const user = useSelector((state) => state.authReducer)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(formData, navigate))
        
    };

    return (
        <div className="flex items-center justify-center min-h-screen  ">
            <div className="max-w-md w-full mx-auto  p-8 rounded-md ">
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-8">
                        <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Enter your email'
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder='Enter your password'
                            required
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className="text-center mt-4">Don't have an account?  <Link to="/register" className="text-indigo-500 hover:text-indigo-600">Register</Link></p>
            </div>
        </div>
    );
}

export default Login;
