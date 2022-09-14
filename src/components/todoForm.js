import { useState } from "react";

const difficultyOptions = [ 'Easy', 'Medium', 'Hard'];

const defaultTodo = {
    name: "",
    date: new Date().toISOString().split("T")[0],
    difficulty: difficultyOptions[1],
};

const TodoForm = ( { addTodo }) => {
    const [todo, setTodo] = useState(defaultTodo);
    
    const createOnChangeHandler = fieldName => {
        return e => {
            setTodo(todo => ({
                ...todo,
                [fieldName]: e.target.value
            }));
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(todo);
        setTodo(defaultTodo);
    }

    return ( <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={todo.name}
                onChange={createOnChangeHandler('name')}
            />
            
            <input 
                type="date"
                value={todo.date}
                onChange={createOnChangeHandler('date')}
            />
            
            <select
                value={todo.difficulty}
                onChange={createOnChangeHandler('difficulty')}
            >
                { difficultyOptions.map((option, i) => <option key={i}>{option}</option>)}
            </select>

            <button type="submit">Add</button>
        </form>
    </div> );
}
 
export default TodoForm;