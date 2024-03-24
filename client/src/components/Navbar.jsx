import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import NewTodo from './NewTodo';
const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);




    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };




    const user = useSelector((state) => state.authReducer)
    console.log(user);
    return (
        <nav className="bg-gray-800 py-4 w-full top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to={user.user ? "/dashboard" : "/"} className="text-white text-2xl font-bold">Todos</Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-4">
                            {!user.user && <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign In</Link>}
                            <Link to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>
                            {/* Profile Section */}
                            <div className="relative">
                                {/* Profile Picture */}
                                {user.user && <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt="User" className="w-8 h-8 rounded-full cursor-pointer" onClick={toggleModal} />}
                                {/* Modal */}
                                {isModalOpen && (
                                    <div className="absolute w-80 right-0 mt-2  bg-white rounded-md shadow-lg py-2">
                                        <p className="px-4 py-2 text-gray-800 text-sm font-medium">Name: {user.user.name}</p>
                                        <hr />
                                        <p className="px-4 py-2 text-gray-800 text-sm font-medium">Email: {user.user.email}</p>
                                        <hr />
                                    </div>
                                )}
                            </div>
                            {user.user && <NewTodo />}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar