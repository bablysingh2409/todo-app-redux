import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { toggleTodo } from '../redux/actions/todoAction';
import { toggle, setInitialState } from '../redux/reducers/todoReducer';
import { todoSelector } from '../redux/reducers/todoReducer';
import axios from 'axios';

function List() {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  // console.log(todos);

  useEffect(() => {
    // fetch('http://localhost:4100/api/todos')
    //   .then((res) => res.json())
    //   .then((parseJson) => console.log(parseJson));
    axios.get('http://localhost:4100/api/todos').then((res) => {
      console.log(res.data);
      dispatch(setInitialState(res.data));
    });
  }, []);

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
                dispatch(toggle(i));
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
