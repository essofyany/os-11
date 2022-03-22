import { useState } from "react";

export default function HomePage() {
  const [showUpadateField, setShowUpadateField] = useState(null);
  const [todoToUpdate, setTodoToUpdate] = useState({
    text: "",
    id: Math.floor(Date.now() / 1000),
  });

  const [todo, setTodo] = useState({
    text: "",
    id: Math.floor(Date.now() / 1000),
  });
  const [list, setList] = useState([]);

  function addTodo() {
    console.log(todo);
    if (!todo.text) return;
    setList([todo, ...list]);
    setTodo({ text: "", id: new Date().getDate() });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTodo();
  }

  function deleteTodo(id) {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  }

  function updateTodo(id) {
    const newList = list.filter((todo) => todo.id !== id);
    setList([todoToUpdate, ...newList]);
    setShowUpadateField(null);
  }

  return (
    <section className="w-6/12 h-5/6 glass">
      <h1 className="text-center text-3xl text-slate-700">Todo App</h1>

      <form onSubmit={handleSubmit} className="w-full px-5 mt-10">
        <input
          value={todo.text}
          placeholder="Add todo"
          onChange={(e) =>
            setTodo({ text: e.target.value, id: Math.floor(Date.now() / 1000) })
          }
          className="px-2 w-2/3 py-1 rounded-md mr-2"
        />
        <button
          type="submit"
          className="bg-red-400 text-white px-5 py-1 rounded-md "
        >
          Add
        </button>
      </form>

      <ul className="px-5 flex flex-col gap-2 w-full mt-5">
        {list.map((todo, idx) => (
          <li
            key={idx}
            className="text-lg font-medium border-2 border-slate-50 p-2 rounded-md flex justify-between items-center"
          >
            {todo.id === showUpadateField ? (
              <>
                <input
                  value={todoToUpdate.text}
                  onChange={(e) =>
                    setTodoToUpdate({ ...todoToUpdate, text: e.target.value })
                  }
                  className="px-1 mr-1 rounded-md"
                />
                <button
                  onClick={() => updateTodo(todo.id)}
                  className="p-1 bg-amber-400 "
                >
                  a
                </button>
              </>
            ) : (
              <p className="">{todo.text}</p>
            )}
            <div className="flex gap-1">
              <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-500 px-2 py-0.5 text-white rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  setShowUpadateField(todo.id);
                  setTodoToUpdate(todo);
                }}
                className="bg-green-500 px-2 py-0.5 text-white rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
