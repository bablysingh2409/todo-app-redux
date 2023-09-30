import './NoteList.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../../../redux/actions/noteAction';

function NoteList() {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();
  // const notes = [];
  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.note}</p>
            <button className="btn btn-danger" onClick={() => dispatch(deleteNote(index))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
