// import { ADD_NOTE, DELETE_NOTE } from '../actions/noteActions';
import { ADD_NOTE, DELETE_NOTE } from '../actions/noteAction';

const initialState = {
  notes: [{ note: 'hey this is my first note', createdOn: new Date() }],
};

export function noteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, { note: action.note, createdOn: new Date() }],
      };
    case DELETE_NOTE:
      state.notes.splice(action.id, 1);
      return {
        ...state,
        notes: [...state.notes],
      };
    default:
      return state;
  }
}
