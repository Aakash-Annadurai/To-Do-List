import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {

  return (
    <div>
      <ul className='main'>
         {props.todos.map((todo, todoIndex) => {
            return (
                <TodoCard {...props} key={todoIndex} index={todoIndex} todo={todo}>
                 <p>{todo}</p>
                </TodoCard>
            )
         })}
      </ul>
    </div>
  )
}
