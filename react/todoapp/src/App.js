import './app.css'
import { useContext, useEffect } from "react";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList"
import TodoContext from "./context/todos";

function App(){
    const {fetchTodos} = useContext(TodoContext);
    
    useEffect(()=>{
        fetchTodos();
    },[fetchTodos])
    return (
        <div className="app">
            <TodoCreate/>
            <TodoList />
        </div>
    )
}
export default App;