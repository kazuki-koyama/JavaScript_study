import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const TodoApp = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = e => setValue(e.target.value);

  const add = () => {
    setTodoList([...todoList, value]);
    setValue("");
  };
  
  return (
    <div>
      <h1>TODO App</h1>
      <input type="text" value={value} onChange={handleChange} />
      <div>
        <p>{value}</p>
        <button onClick={add}>追加</button>
        <ul>
          {todoList.map((todo, i) => {
            <li key={i}>{todo}</li>
          })}
        </ul>
      </div>
    </div>
  );
};

function App() {
  return (
    <TodoApp />
  );
};

export default App;
