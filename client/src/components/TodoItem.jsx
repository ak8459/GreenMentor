import React, { useEffect, useState } from 'react';
import EditTodoModal from './EditTodoModel';
import { useDispatch } from 'react-redux';
import { deleteTodo, } from '../Redux/TodosReducer/action';
function TodoItem({ id, title, description }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    return (
        <tr className="hover:bg-gray-100 transition text-center">
            <td className="border px-4 py-2">{title}</td>
            <td className="border px-4 py-2">{description}</td>
            <td className="border px-4 py-2">
                <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
            </td>
            <td className="border px-4 py-2">
                <button onClick={() => dispatch(deleteTodo(id))} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
            </td>
            {isModalOpen && <EditTodoModal id={id} Title={title} Description={description} closeModal={closeModal} />}
        </tr>
    );
}

export default TodoItem;