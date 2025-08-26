import { useContext, useState } from "react";
import TodoContext from "../context/todos";

function TodoEdit({todo, onSubmit}){
    const [todoTitle,setTodoTitle] = useState(todo.todo)

    const {editTodoById} = useContext(TodoContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        editTodoById(todo.id,todoTitle);
        onSubmit();

    }

    const handleChange = (event) => {
        setTodoTitle(event.target.value);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={todoTitle} />
                <button>Save</button>
            </form>
        </div>
    )
}

export default TodoEdit;