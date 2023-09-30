export const ADD_NOTE = 'Add Note';
export const DELETE_NOTE = 'Delete Note';

export const addNote = (note) => ({ type: ADD_NOTE, note });
export const deleteNote = (id) => ({ id, type: DELETE_NOTE });
