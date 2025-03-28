import { useState } from "react";
import Todo from "./Todo";

export default function TodoApp() {
  const [title, setTitle] = useState("Hola");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setTitle(value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    const temp = [...todos];
    temp.unshift(newTodo);

    setTodos(temp);

  }
  function handleUpdate(id,value){
    const temp = [...todos];
    const item = temp.find(item => item.id === id);
    item.title= value;
    setTodos(temp);
  }
  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          className="todoInput"
          value={title}
        />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create Todo"
          className="buttonCreate"
        />
      </form>

      <div className="todosContainer">
        {todos.map((item) => (
          <Todo key={item.id} item={item} onUpdate={handleUpdate}/>
        ))}
      </div>
      
    </div>
  );
}
