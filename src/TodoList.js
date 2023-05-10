import React, {useState} from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (newTodo) => {
        setTodos(newTodo => [...todos, newTodo])
    }

    const removeTodo = (todo) => {
        setTodos(todos.filter(t => t !== todo));
        console.log("REMOVING:", todo);
    }
  return (
    <div className='TodoList'>
        <div className='List'>
            <h1>Todo List</h1>
            {todos.map(t => (
                <Todo todo={t} remove={removeTodo} />
            ))}
        </div>
        <NewTodoForm add={addTodo}/>
    </div>
  )
}

export default TodoList