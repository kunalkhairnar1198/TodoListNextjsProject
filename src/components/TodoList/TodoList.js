import React, { useState } from 'react'
import classes from './Todolist.module.css';
import TodoItem from './TodoItem';
import TodoForm from '../TodoForm/TodoForm';

const TodoList = (props) => {
  const [isVisible, setIsVisible] = useState(false)
 
  const switchhandler =()=>{
    setIsVisible(prev => !prev)
  }

  const cancelFormHandler =()=>{
    setIsVisible(false);
    console.log('evente trigger')
  }

  const addTodoHandler=async(data)=>{

  
   const res = await fetch('/api/new-todos',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        'Content-Type':'application/json' 
      }      
    });
    const result = await res.json();
    console.log(result)
   
    
    setIsVisible(false);
  }

  console.log(props)

  return (
    <ul className={classes.list}>

    {props.todos.map((item,index) => (
      <TodoItem
        key={index}
        id={item.id}
        title={item.title}
        description={item.description}
        isCompleted={item.isCompleted}
        />
     ))} 
      {isVisible && <TodoForm onAddTodo={addTodoHandler} onCancel={cancelFormHandler}/>}
    {!isVisible && <div>
            <button type='button' className={classes.button}  onClick={switchhandler}> + Add todo</button>
      </div>}
  </ul>
  )
}

export default TodoList
