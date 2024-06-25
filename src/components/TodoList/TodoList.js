import React, { useState } from 'react'
import classes from './Todolist.module.css';
import TodoItem from './TodoItem';
import TodoForm from '../TodoForm/TodoForm';

const TodoList = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  const dummytodo = [
    {
      title: 'ramm'
    },
    {
      title: 'kunal'
    }
  ]
  const switchhandler =()=>{
    setIsVisible(prev => !prev)
  }

  const cancelFormHandler =()=>{
    setIsVisible(false);
    console.log('evente trigger')
  }

  const addTodoHandler=(data)=>{
    console.log(data)
  }

  return (
    <ul className={classes.list}>

    {dummytodo.map((item, index) => (
      <TodoItem
        key={index}
        id={index}
        title={item.title}
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
