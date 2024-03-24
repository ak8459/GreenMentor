import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../components/Loading'
import { useEffect } from 'react'
import { getTodos } from '../Redux/TodosReducer/action'
import TodoItem from '../components/TodoItem'
const Todos = () => {

    const Todos = useSelector((state) => state.todosReducer)
    const { isLoading, isError, todos, Err } = Todos
    console.log(Err);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])


    if (isLoading) {
        return <Loading />
    }
   

    if (Err === 404) {
        return <h1 className='text-center text-2xl font-bold text-red-500 absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2'>No todos found! Create one</h1>
    }

    return (
        <>
            <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos?.map(todo => (
                            <TodoItem key={todo.id} id={todo._id} title={todo.title} description={todo.description} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )

}

export default Todos