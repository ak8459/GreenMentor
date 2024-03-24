import React, { useState } from 'react';
import { addTodo, getTodos } from '../Redux/TodosReducer/action';
import { useDispatch } from 'react-redux';
function NewTodo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = { title, description };
        dispatch(addTodo(newTodo));
        dispatch(getTodos());
        setTitle('');
        setDescription('');
        closeModal();
    }


    return (
        <div>
            <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded ml-4">
                Create Todo
            </button>
            {isModalOpen && (
                <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-md">
                        <h2 className="text-2xl font-semibold mb-4">Create Todo</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-gray-700 font-medium">Title</label>
                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="title" name="title" className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="description" className="block text-gray-700 font-medium">Description</label>
                                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} name="description" className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button onClick={closeModal} className="mr-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NewTodo;
