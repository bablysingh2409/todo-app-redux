import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addTodo } from '../redux/actions/todoAction';
import { actions, addTodoAsync } from '../redux/reducers/todoReducer';
import { notificationSelector, resetNotification } from '../redux/reducers/notificationReducer';

function Form() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);
  // console.log(message);

  useEffect(() => {
    let interval;
    if (message) {
      interval = setTimeout(() => {
        dispatch(resetNotification.reset());
      }, 2000);
    }

    return () => clearTimeout(interval);
  }, [message, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // createTodo(text);
    setText('');
    dispatch(addTodoAsync(text));
    // dispatch(actions.addTodo(text));
  };

  return (
    <div className="form-container">
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Form;
