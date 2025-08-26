import './todoShow.css'; 
import { useContext, useState } from "react";
import TodoEdit from './TodoEdit'
import TodoContext from "../context/todos";

function TodoShow ({ todo }){
    const [showEdit,setShowEdit] = useState(false);

    const {deleteTodoById, markedTodoById} = useContext(TodoContext);

    const handleEditClick = ( ) => {
        setShowEdit(!showEdit);
    }

    const handleShubmit = () => {
        setShowEdit(false);
    }

    const handleDeleteClick = () => {
        deleteTodoById(todo.id);
    }

    const handleMarkClick = (event) => {
        markedTodoById(todo.id,event.target.checked);
    }
    
    let content=todo.todo;

    if(showEdit){
        content=<TodoEdit onSubmit={handleShubmit} todo={todo} />
    }


    return(
        <div className='todo-show'>
            <div className='todo'>
                <input type='checkbox' checked={todo.marked} onChange={handleMarkClick}/>
                {content}
            </div>
            <div>
                <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDeleteClick} >Delete</button>
            
            </div>
        </div>
    )
}

export default TodoShow;