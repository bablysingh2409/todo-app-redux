import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    reset: (state, action) => {
      state.message = '';
    },
  },
  extraReducers: {
    'todo/add': (state, action) => {
      state.message = 'todo is added successfully';
    },
  },
});

export const notificationReducer = notificationSlice.reducer;
export const resetNotification = notificationSlice.actions;
export const notificationSelector = (state) => state.notificationReducer.message;
