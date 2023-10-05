// import { TOGGLE_TODO, ADD_TODO } from '../actions/todoAction';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

//creating reducers using redux toolkit
const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    setInitialState: (state, action) => {
      state.todos = [...action.payload];
    },
    addTodo: (state, action) => {
      state.todos.push({
        text: action.payload,
        completed: false,
      });
    },

    toggle: (state, action) => {
      state.todos.map((todo, i) => {
        if (i == action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodo, toggle, setInitialState } = todoSlice.actions;
export const todoSelector = (state) => state.todoReducer.todos;

// export function todoReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false,
//           },
//         ],
//       };
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo, i) => {
//           if (i == action.id) {
//             todo.completed = !todo.completed;
//           }
//           return todo;
//         }),
//       };
//     default:
//       return state;
//   }
// }
