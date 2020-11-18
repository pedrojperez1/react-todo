import React, {useState} from "react";
import {v4 as uuid} from "uuid";

const NewTodoForm = ({addTodo}) => {
    const INITIAL_STATE = {
        todo: ''
    };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setFormData(formData => (
            {...formData, [name]: value}
        ))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            ...formData, id: uuid()
        }
        addTodo(newTodo);
        setFormData(INITIAL_STATE);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="New Todo" 
                    name="todo"
                    onChange={handleChange}
                    value={formData.todo}
                ></input>
                <button>Add</button>
            </form>
        </div>
    )
};

export default NewTodoForm;