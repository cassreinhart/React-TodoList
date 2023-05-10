import React from 'react'

const Todo = ({todo, remove}) => {
    handleRemove = () => {
        remove(todo)
    }
  return (
    <li>
        {todo}
        <button onClick={handleRemove}>X</button>
    </li>
  )
}

export default Todo;