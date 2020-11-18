import React from "react";
import "./Todo.css"

const Todo = ({id, text, removeTodo}) => {
    const handleClick = () => {
        removeTodo(id);
    }
    return (
        <li className="Todo-li">
            {text}
            <span>
                <button className="Todo-btn" onClick={handleClick}>X</button>
            </span>
        </li>
        
    )
};

export default Todo;