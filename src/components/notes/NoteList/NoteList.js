import './NoteList.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../../redux/reducers/noteReducer';
import { noteSelector } from '../../../redux/reducers/noteReducer';
// import { deleteNote } from '../../../redux/actions/noteAction';

function NoteList() {
  const notes = useSelector(noteSelector);

  const dispatch = useDispatch();
  // const notes = [];
  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.note}</p>
            <button className="btn btn-danger" onClick={() => dispatch(actions.delete(index))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
