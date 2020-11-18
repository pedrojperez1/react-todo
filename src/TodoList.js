import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    return (
        <div className="TodoList">
            <NewTodoForm addTodo={addTodo}/>
            <ul>
                {todos.map(todo => <Todo text={todo.todo} id={todo.id} removeTodo={removeTodo}/>)}
            </ul>
        </div>
    )
};

export default TodoList;