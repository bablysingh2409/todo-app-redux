import { Provider } from 'react-redux';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { store } from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import NoteForm from './components/notes/NoteForm/NoteForm';
import NoteList from './components/notes/NoteList/NoteList';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Home />}></Route>
            <Route
              path="todo"
              element={
                <>
                  <Navbar />
                  <h1>Todos</h1>
                  <Form />
                  <List />
                </>
              }
            ></Route>
            <Route
              path="notes"
              element={
                <>
                  <Navbar />
                  <h1>Notes</h1>
                  <NoteForm />
                  <NoteList />
                </>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
