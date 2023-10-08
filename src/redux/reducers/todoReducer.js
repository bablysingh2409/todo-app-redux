// import { TOGGLE_TODO, ADD_TODO } from '../actions/todoAction';
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { actions } from './noteReducer';

const initialState = {
  todos: [],
};

export const getInitialState = createAsyncThunk(
  'todo/setInitialState',
  //  (arg, thunkAPI) => {
  //   axios.get('http://localhost:4100/api/todos').then((res) => {
  //     console.log(res.data);
  //     // dispatch(setInitialState(res.data));
  //     thunkAPI.dispatch(actions.setInitialState(res.data));
  //   });
  () => {
    return axios.get('http://localhost:4100/api/todos');
  }
);

export const addTodoAsync = createAsyncThunk(
  'todo/addTodo',

  async (payload) => {
    const res = await fetch('http://localhost:4100/api/todos', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        text: payload,
        completed: false,
      }),
    });
    return res.json();
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(getInitialState.fulfilled, (state, action) => {
        state.todos = [...action.payload.data];
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      });
  },
});

export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;
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
