import { useState } from "react";

export default function HomePage() {
  const [todo, setTodo] = useState({
    text: "",
    id: Math.floor(Date.now() / 1000),
  });
  const [list, setList] = useState([]);

  function addTodo() {
    console.log(todo);
    if (!todo.text) return;
    setList([todo, ...list]);
    setTodo({ text: "", id: Math.floor(Date.now() / 1000) });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTodo();
  }

  function deleteTodo(id) {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
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
            <p className="">{todo.text}</p>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 px-2 py-0.5 text-white rounded-md"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
