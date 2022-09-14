import './App.css';

import { useState } from 'react';
import TodoTable from './components/todoTable';
import TodoForm from './components/todoForm';


import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div className="form">
        <TodoForm 
          addTodo={todo => setTodos(todos => [...todos, todo])}
        />
      </div>
      <TodoTable 
        todos={todos} 
      />
    </div>
  );
}

export default App;
