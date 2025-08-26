import './todoCreate.css';
import { useContext, useState,useEffect } from "react";
import TodoContext from "../context/todos";


function TodoCreate (){
    const [showAlert, setShowAlert] = useState(false);
    const [todo, setTodo] = useState('')
    const {createTodo} = useContext(TodoContext);

    useEffect(()=>{
        if(showAlert){
            const timer = setTimeout(()=>{
                setShowAlert(false);
            },3000);
            return ()=>{
                clearTimeout(timer);
            }
        }
    },[showAlert])
    
    const handleSubmit = ( event ) => {
        event.preventDefault();
        if(todo ===''){
            setShowAlert(true);
            return;
        }
        createTodo(todo);
        setTodo('');
    }
    const handleChange = (event) => {
        setTodo(event.target.value)
    }

    return <div className="add-todo-form">
        <div>{showAlert && (
                <div style={{ color: "red", marginTop: "10px" }}>
                ⚠️ Please enter a todo before submitting!
                </div>
            )}
        </div>
        <form onSubmit={handleSubmit} className='form'>
            <input onChange={handleChange} value={todo} />
            <button>Create</button>
        </form>
    </div>

}

export default TodoCreate;

