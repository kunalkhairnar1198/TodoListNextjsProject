import React, { useState } from 'react'
import Card from '../ui/Card'
import classes from './TotoItem.module.css'
import TodoForm from '../TodoForm/TodoForm'
import Link from 'next/link'

const TodoItem = (props) => {
  const [isComplete, setIsComplete] = useState(props.isCompleted);
console.log(props)

  const toggleCompleteHandler = async () => {
    const updatedStatus = !isComplete;
    setIsComplete(updatedStatus);

    // Update the status in the database
    const res = await fetch('/api/new-todos', {
      method: 'PATCH',
      body: JSON.stringify({ id: props.id, isComplete: updatedStatus }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      console.error('Failed to update the todo status');
      setIsComplete(!updatedStatus);
    }
  };
  
  
    const showMeetupHandler =()=>{
        // router.push('/' + props.id)
      }

      const deletTodoHandler =()=>{

      }
      
      const textStyle = {
        textDecoration: isComplete ? 'line-through' : 'none',
        color: isComplete ? 'gray' : 'black'
      }    
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <input
            type="checkbox"
            className={classes.check}
            checked={isComplete}
            onChange={toggleCompleteHandler}
          />
          <div className={classes.textContent}>
            <h3 style={textStyle}>{props.title}</h3>
            <p className={classes.desc} style={textStyle}>{props.description}</p>
          </div>
          <div className={classes.actions}>
            <button onClick={deletTodoHandler}>Delete</button>
          </div>
        </div>
      </Card>
    </li>

  )
}

export default TodoItem
