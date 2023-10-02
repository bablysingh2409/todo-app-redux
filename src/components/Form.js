import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addTodo } from '../redux/actions/todoAction';
import { actions } from '../redux/reducers/todoReducer';
import { notificationSelector } from '../redux/reducers/notificationReducer';

function Form() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);

  const handleSubmit = (e) => {
    e.preventDefault();
    // createTodo(text);
    setText('');
    dispatch(actions.add(text));
  };

  return (
    <div className="form-container">
      {message && (
        <div class="alert alert-success" role="alert">
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
