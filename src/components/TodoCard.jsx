import React from 'react'

export default function TodoCard(props) {
    return (  
    <li className='todoItem'>
        {props.todo}
        <div className='actionsContainer'>
        <button onClick={()=>{
            props.handleEditTodos(props.index)
        }}><i className="fa-regular fa-pen-to-square"></i></button>
        <button onClick={()=>{
            props.handleDeleteTodos(props.index)
        }}><i className="fa-solid fa-trash"></i></button>
        
        </div> 
    </li>
  )
}
