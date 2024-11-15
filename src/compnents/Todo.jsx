import { useState } from "react"
export default function Todo(){
    const [todo,SetTodo]=useState();
    const[todoList,SetTodoList]=useState();
    function textchange(){
        
    }
    return (<div>Todo
        <form >
            <input type="text" onChange={textchange} />
            <button>Add</button>
        </form>
    </div>)
}