import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../Redux/TodosReducer/action';

function EditTodoModal({ id, Title, Description, closeModal }) {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todosReducer.todos);
    const [title, setTitle] = useState(Title);
    const [description, setDescription] = useState(Description);

    useEffect(() => {
        const todoToUpdate = todos.find((todo) => todo._id === id);
        if (todoToUpdate) {
            setTitle(todoToUpdate.title);
            setDescription(todoToUpdate.description);
        }
    }, [id, todos]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleEditTodo = () => {
        dispatch(editTodo(id, title, description));
        closeModal();
    };

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded-md">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-medium">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={handleTitleChange}
                        className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="description" className="block text-gray-700 font-medium">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={handleDescriptionChange}
                        className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="flex justify-end">
                    <button onClick={closeModal} className="mr-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
                    <button onClick={handleEditTodo} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
                </div>
            </div>
        </div>
    );
}

export default EditTodoModal;
