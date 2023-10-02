import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addTodo } from '../redux/actions/todoAction';
import { actions } from '../redux/reducers/todoReducer';

function Form() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // createTodo(text);
    setText('');
    dispatch(actions.add(text));
  };

  return (
    <div className="form-container">
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
