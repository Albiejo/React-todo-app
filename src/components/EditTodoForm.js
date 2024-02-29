import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const EditTodoForm = ({editTodo,task,cancelTodo}) => {
  const [value,setValue]=useState(task.task)

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value,task.id);
    setValue('');
  };

  return (
    <form className='Todo-Form' onSubmit={handleSubmit}>
     <div className='Todo2'>
      <input type="text" value={value} className='todo-input2' placeholder='Update task...' onChange={(e)=>{setValue(e.target.value)}}/>
      <button type='submit'><FontAwesomeIcon icon={faCheck} className='todo-btn2'/></button>
      <FontAwesomeIcon icon={faXmark} className='todo-btn2' onClick={()=>cancelTodo(task.id)}/>
      </div>
    </form>
  )
}

export default EditTodoForm