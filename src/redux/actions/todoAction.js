//action constants
export const ADD_TODO = 'Add Todo';
export const TOGGLE_TODO = 'Toggle Todo';

//action creators
export const addTodo = (text) => ({ text, type: ADD_TODO });
export const toggleTodo = (id) => ({ id, type: TOGGLE_TODO });
