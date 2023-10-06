// import * as redux from 'redux';
// import { combineReducers } from 'redux';
import { todoReducer } from './reducers/todoReducer';
import { noteReducer } from './reducers/noteReducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { notificationReducer } from './reducers/notificationReducer';
import { loggerMiddleware } from './middlewares/loggerMiddleware';

// const result = combineReducers({
//   todos: todoReducer,
//   notes: noteReducer,
// });

// export const store = redux.createStore(result);
export const store = configureStore({
  reducer: {
    noteReducer,
    todoReducer,
    notificationReducer,
  },
  middleware: [...getDefaultMiddleware(), loggerMiddleware],
});
