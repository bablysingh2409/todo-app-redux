// import { ADD_NOTE, DELETE_NOTE } from '../actions/noteActions';
// import { ADD_NOTE, DELETE_NOTE } from '../actions/noteAction';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [{ note: 'hey this is my first note', createdOn: new Date() }],
};

//creating reducres using redux toolkit
const noteSlice = createSlice({
  name: 'note',
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.notes.push({
        note: action.payload,
        createdOn: new Date(),
      });
    },
    delete: (state, action) => {
      state.notes.splice(action.payload, 1);
    },
  },
});

export const noteReducer = noteSlice.reducer;
export const actions = noteSlice.actions;
export const noteSelector = (state) => state.noteReducer.notes;

// export function noteReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_NOTE:
//       return {
//         ...state,
//         notes: [...state.notes, { note: action.note, createdOn: new Date() }],
//       };
//     case DELETE_NOTE:
//       state.notes.splice(action.id, 1);
//       return {
//         ...state,
//         notes: [...state.notes],
//       };
//     default:
//       return state;
//   }
// }
