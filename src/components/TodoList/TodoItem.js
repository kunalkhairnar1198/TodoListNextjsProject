import React from 'react'
import Card from '../ui/Card'
import classes from './TotoItem.module.css'
import TodoForm from '../TodoForm/TodoForm'
import Link from 'next/link'

const TodoItem = (props) => {

    const showMeetupHandler =()=>{
        // router.push('/' + props.id)
      }

      const deletTodoHandler =()=>{

      }
    
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content} onClick={showMeetupHandler}>
          <h3>{props.title}</h3>
            <div className={classes.actions}>
                <button onClick={deletTodoHandler}>Delete</button>
            </div>
        </div>
        
      </Card>
       
    </li>
  )
}

export default TodoItem
