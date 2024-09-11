import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {

const [todos, setTodos] =useState([])               //get and storage text in an array
const [todoValue, setTodovalue] = useState('')      //stores values from input

function persistData(newList)                       // to set the data from the input and store it in local storage
{                                        
  localStorage.setItem('todos', JSON.stringify({todos : newList})) 
}


function handleAddTodos(newTodo)                     // add new card to the list
{        
  const newTodosList = [...todos, newTodo];
  persistData(newTodosList)
  setTodos(newTodosList)
}

function handleDeleteTodos(index){                 // delete new card from the list
    const newTodosList = todos.filter((todo, todoIndex)=>{
      return(
        todoIndex != index
      )     
    })
    persistData(newTodosList)
    setTodos(newTodosList)
}

function handleEditTodos(index)                  // edit card from the list(deleting the existing and edit it in input box)
{
  const valueToBeEdited = todos[index]
  setTodovalue(valueToBeEdited)
  handleDeleteTodos(index)
}

useEffect(()=>{                                   // useEffect for storing the list in local storage
  if(!localStorage){
    return
  }
  let localTodos = localStorage.getItem('todos')
  if(!localTodos){
    return
  }
  localTodos=JSON.parse(localTodos).todos
  setTodos(localTodos)
},[])

  return (
    <main>
     <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodovalue={setTodovalue}/>
     <TodoList handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos} todos={todos}/>
    </main>
  )
}

export default App
