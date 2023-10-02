import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { toggleTodo } from '../redux/actions/todoAction';
import { actions } from '../redux/reducers/todoReducer';
import { todoSelector } from '../redux/reducers/todoReducer';

function List() {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  // console.log(todos);
  return (
    <div className="list-container">
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <span>{todo.text}</span>
            <span
              className="task-status"
              style={todo.completed ? { backgroundColor: 'green' } : { backgroundColor: '#952323' }}
            >
              {todo.completed ? 'Done' : 'Pending'}
            </span>
            <button
              onClick={() => {
                dispatch(actions.toggle(i));
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
