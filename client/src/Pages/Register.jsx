import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { createUser } from '../Redux/authReducer/action.js';
function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(formData))
        alert('User created successfully')
        navigate('/')
        setFormData({ email: '', password: '' });
    };

    return (
        <div className="flex items-center justify-center min-h-screen  ">
            <div className="max-w-md w-full mx-auto  p-8 rounded-md ">
                <h2 className="text-2xl font-semibold text-center mb-4">Register your account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Enter your name'
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
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
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="text-center mt-4"> Already have an account?  <Link to="/" className="text-indigo-500 hover:text-indigo-600">Login</Link></p>
            </div>
        </div>
    );
}

export default Register;
