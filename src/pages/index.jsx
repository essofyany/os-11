import {useState} from 'react';

export default function HomePage() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);

  const add = () => {
    console.log(name);
    setList([...list, name]);
    setName('mm')
  }

  const change = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
  }
  
  return (
    <section className="w-6/12 h-5/6 glass">
      <h1 className="text-center text-3xl text-slate-700">To Do App</h1>
      <div>
        <form>
          <div>
            <label htmlFor="name">Entrer</label>
            <input type="text" value={name} onChange={change}/>
          </div>

          <button type="button" onClick={() => add()}>Click</button>
        </form>
        <ul>
          {list.map((lis, id) => (
            <li key={id}>{lis}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
