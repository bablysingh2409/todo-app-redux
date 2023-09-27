import React from 'react';

function List({ toggleTodo, todos }) {
  console.log(todos);
  return (
    <div className="list-container">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <span>{todo.completed}</span>
            <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
