import React from 'react'

export default function TodoInput(props) {
  return (
    <div>
    <h1 className='heading'>TO DO LIST</h1>
    <header>
        <input value={props.todoValue} onChange={(e) =>{props.setTodovalue(e.target.value)}} placeholder='enter to do...' />
        <button onClick={()=>{
            props.handleAddTodos(props.todoValue)
            props.setTodovalue('')
        }}>Add</button>
    </header>
    </div>
  )
}
