import axios from "axios";
import {createContext, useCallback, useState } from "react";

const TodoContext = createContext();

const Provider = ({children})=>{

    const [todos,setTodo] = useState([]);

    const fetchTodos =  useCallback(async() => {
        const response = await axios.get("http://localhost:3001/todos")
        setTodo(response.data);
    },[]);

    const createTodo = async(todo) => {
        const response = await axios.post("http://localhost:3001/todos",{
            todo,
            marked:false
        });
        const updatedTodo = [...todos,response.data];
        setTodo(updatedTodo);
    };

    const editTodoById = async (id, todoTitle) => {
        const response = await axios.patch(`http://localhost:3001/todos/${id}`,{
            todo:todoTitle,
        });

        const updatedTodo = todos.map((todo) => {
            if(todo.id === id){
                return {...todo,...response.data}
            }
            return todo;
        });
        setTodo(updatedTodo);

    }

    const deleteTodoById = async(id) => {
        await axios.delete(`http://localhost:3001/todos/${id}`);

        const updatedTodo = todos.filter((todo)=>{
            return todo.id !== id;
        });
        // console.log(updatedTodo)
        setTodo(updatedTodo);

    }

    const markedTodoById = async(id, marked) => {
        const response = await axios.patch(`http://localhost:3001/todos/${id}`,{
            marked
        });

        const updatedTodo = todos.map((todo) => {
            if(todo.id === id){
                return {...todo,...response.data}
            }
            return todo;
        });
        setTodo(updatedTodo);
    }

    return (
        <TodoContext.Provider value={{
            todos,
            createTodo,
            fetchTodos, 
            editTodoById,
            deleteTodoById,
            markedTodoById
        }}>
            {children} 
        </TodoContext.Provider>
    )

}

export {Provider};
export default TodoContext;