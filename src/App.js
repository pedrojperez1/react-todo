import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import './App.css';


function App() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const addTodo = (todo) => dispatch({type: "ADD", payload: todo});
  const removeTodo = (id) => dispatch({type: "REMOVE", payload: id});

  return (
    <div className="App">
      <NewTodoForm add={addTodo}/>
      {
        todos.map(t => (
          <Todo key={t.id} id={t.id} text={t.todo} remove={removeTodo}/>
        ))
      }
    </div>
  );
}

export default App;
