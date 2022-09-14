import './App.css';

import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import TodoPage from './pages/todoPage';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Router>
        
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/todos'>Todos</Link>
        </nav>
        <Routes>
          <Route
            path='/todos'
            element={
              <TodoPage
                todos={todos}
                setTodos={setTodos}
              />}
          />
          <Route
            path='/about'
            element={<AboutPage/>}
          />
          <Route
            path='/contact'
            element={<ContactPage/>}
          />
          <Route
            path='/'
            element={<HomePage/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
