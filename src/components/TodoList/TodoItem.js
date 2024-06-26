import React, { useState } from 'react'
import Card from '../ui/Card'
import classes from './TotoItem.module.css'
import { useRouter } from 'next/router';

const TodoItem = (props) => {
  const [isComplete, setIsComplete] = useState(props.isCompleted);
console.log(props)
const rout = useRouter()

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

      const deletTodoHandler =async(id)=>{
        const res = await fetch('/api/new-todos',{
          method:'PUT',
          body:JSON.stringify(id),
          headers:{
            'Content-Type':'application/json'
          }
        })
        
        if(res.ok){
        rout.replace('/')
          console.log('delete the todo',res)
        }
        console.log(id)
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
            <button onClick={()=>deletTodoHandler(props.id)}>Delete</button>
          </div>
        </div>
      </Card>
    </li>

  )
}

export default TodoItem
