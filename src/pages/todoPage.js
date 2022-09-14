import TodoTable from '../components/todoTable';
import TodoForm from '../components/todoForm';

const TodoPage = ({ setTodos, todos}) => {
    return (<>
        <div className="form">
            <TodoForm
                addTodo={todo => setTodos(todos => [...todos, todo])}
            />
        </div>
        <TodoTable
            todos={todos}
        />
    </>);
}

export default TodoPage;