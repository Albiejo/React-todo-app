import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import Validation from './Validation';
import {v4 as uuidv4} from 'uuid';
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoWrapper = () => {
  const [todos,setTodos]=useState([])
  const [message,setMessage]=useState("")
  const [todomessage,setTodoMessage]=useState("");

  const addTodo=todo=>{
    const found = todos.find((element) => element.task===todo);
    if(found){
      return setMessage("Todo must be unique!")
    }
    if(todo.length<1){
      return setMessage("Todo cannot be empty!")
    }
    setMessage("")
    setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}])
    
  }

  const toggleComplete=(id)=>{
    setTodos(todos.map((todo=>todo.id===id?{...todo,completed:!todo.completed}:todo)))
  }

  const deleteTodo=id=>{
    setTodos(todos.filter(todo=>todo.id!==id))
  }

  const editTodo=(id)=>{
    setTodos(todos.map((todo=>todo.id===id?{...todo,isEditing:!todo.isEditing}:todo)))
  }

  const editTask=(task,id)=>{
    const found = todos.find((element) => element.task===task && element.id!==id);
    if(found){
      return setTodoMessage("Todo must be unique!")
    }
    if(task.length<1){
      return setTodoMessage("Todo cannot be empty!")
    }
    setTodoMessage("")
    setTodos(todos.map((todo=>todo.id===id?{...todo,task,isEditing:!todo.isEditing}:todo)))
  }

  const cancelTodo=(id)=>{
    setTodoMessage("")
    setTodos(todos.map((todo=>todo.id===id?{...todo,isEditing:!todo.isEditing}:todo)))
  }
 
  const currentDate = new Date().toLocaleDateString();
  return (
    
    <div className='TodoWrapper'>
     <h2>To-Do</h2>
    <p>{currentDate}</p>
      <TodoForm addTodo={addTodo} message={message}/>
      <Validation message={message}/>
      {todos.map((todo,index)=>(
        todo.isEditing?(
          <>
          <EditTodoForm editTodo={editTask} task={todo} key={index} cancelTodo={cancelTodo}/>
          <Validation message={todomessage}/>
          </>
        ):
        (
          <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
        )
       
      ))}
      
    </div>
  )
}

export default TodoWrapper