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
  
      const res = await fetch('/api/new-todos', {
        method: 'PATCH',
        body: JSON.stringify({ id: props.id, isComplete: false }),
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
      
      // const isComplete = props.isComplete
    
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
            <h3>{props.title}</h3>
            <p className={classes.desc}>{props.description}</p>
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
