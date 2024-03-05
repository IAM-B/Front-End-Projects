import { useState } from "react";
import { nanoid } from "nanoid";
import ListItem from "./components/ListItem";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const [showValidation, setShowValidation] = useState(false)

  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function handleSubmit(e){
    e.preventDefault()

    if(todo === ""){
      setShowValidation(true)
      return
    }

    setTodoList([...todoList, {id: nanoid(8), content: todo}])
    setTodo("")
    setShowValidation(false)
  }
  return (
    <div className="h-screen bg-slate-900">
      <div className="max-w-4x1 max-auto pt-20 px-6">
        <h1 className="text-3x1 text-slate-100 mb-4">The To-do list</h1>

        <form onSubmit={handleSubmit} className="mb-10">
          <label htmlFor="todo-item" className="text-slate-50">
            Add a item
          </label>
          <input
            value={todo}
            onChange={e => setTodo(e.target.value)}
            type="text"
            className="mt-1 block w-full rounded"
          />
          {showValidation && (
            <p className="text-red-400">Add content</p>
          )}
          <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">
            Add
          </button>
        </form>
        <ul>
          {todoList.length === 0 && (
            <li className="text-slate-50 text-md">Not items</li>
          )}
          {todoList.length > 0 &&
            todoList.map((item) => (
              <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
