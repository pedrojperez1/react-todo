import React from "react";
import "./Todo.css"

const Todo = ({id, text, remove}) => {
    const handleRemove = (id) => {
        remove(id);
    }
    return (
        <li className="Todo-li">
            {text}
            <span>
                <button className="Todo-btn" onClick={() => handleRemove(id)}>X</button>
            </span>
        </li>
        
    )
};

export default Todo;