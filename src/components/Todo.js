import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faCircleCheck,faTrash } from '@fortawesome/free-solid-svg-icons'



const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
      <div className='Todo'>
        <p className={`${task.completed ? 'completed' : ""}`} >{task.task}</p>
        {task.completed?<div>
        <FontAwesomeIcon icon={faCircleCheck} className='tick-icon' onClick={() => { toggleComplete(task.id) }}/>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} className='delete-icon'/>
        </div>:<div>
        <FontAwesomeIcon icon={faCircleCheck} className='tick-icon' onClick={() => { toggleComplete(task.id) }}/>
          <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)} className='edit-icon'/>
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} className='delete-icon'/>
        </div>}
        
      </div>
  )
}

export default Todo