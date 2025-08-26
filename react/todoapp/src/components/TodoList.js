import { useContext } from "react";
import TodoContext from "../context/todos";
import TodoShow from './TodoShow'
function TodoList (){
    const {todos} = useContext(TodoContext);

    const markedTodos = todos.filter((todo) => {
        return todo.marked;
    });
    
    const unmarkedTodos = todos.filter((todo) => {
        return !todo.marked;
    });

    const renderUnmarkedTodos =unmarkedTodos.map((todo) => {
        return <TodoShow key={todo.id} todo={todo} />
    })
    const renderMarkedTodos =markedTodos.map((todo) => {
        return <TodoShow key={todo.id} todo={todo} />
    })

    return(
        <div>
            <div>{renderUnmarkedTodos}</div>
            <div>{renderMarkedTodos}</div>
        </div>
    )
}

export default TodoList;