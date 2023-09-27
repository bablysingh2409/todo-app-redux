import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
  };

  const toggleTodo = (id) => {
    const newTodo = todos.map((todo) => {
      if (todo.id == id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodo);
  };

  return (
    <div className="App">
      <Form createTodo={createTodo} />
      <List toggleTodo={toggleTodo} todos={todos} />
    </div>
  );
}

export default App;
