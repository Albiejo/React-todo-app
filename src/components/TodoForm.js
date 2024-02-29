import React,{useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [value,setValue]=useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <form className='Todo-Form' onSubmit={handleSubmit}>
      <input type="text" value={value} className='todo-input' placeholder='Enter a task...' onChange={(e)=>{setValue(e.target.value)}}/>
      <button type='submit' className='todo-btn'>Add</button>
    </form>
  )
}

export default TodoForm