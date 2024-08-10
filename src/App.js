import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const handleAddTodo = () => {
    const text = inputRef.current.value;
    setTodos([...todos, text]);
    inputRef.current.value = "";
    console.log(text); // Just to test if the prop is returning
  }
  return (
    <div className="App">
      <h2>To Do List</h2>
      <ul>
        {todos.map((item) => {
          return (<li>{item}</li>)
        })}
      </ul>
      <input ref={inputRef} placeholder='Enter item........' />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default App;
