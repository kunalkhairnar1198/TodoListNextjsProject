import React, { useRef } from 'react';
import classes from './TodoForm.module.css';
import { useRouter } from 'next/router';

const TodoForm = (props) => {
    const route = useRouter()
    const todoTextRef =  useRef()

    const submitHandler =(event)=>{
      event.preventDefault();

        const todoText = todoTextRef.current.value;
      
        console.log(todoText)
      
        const todoObj = {
          title: todoText,
        }
      
        props.onAddTodo(todoObj)

        todoTextRef.current.value=''
    }

    const navigateRoute =()=>{
      if (props.onCancel) {
        props.onCancel();
      } else {
        route.push('/');
      }
    }
  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler}>
        <div className={classes.formGroup}>
          <label htmlFor="inputField" className={classes.label} >Enter Task</label>
           <textarea className={classes.textarea}  ref={todoTextRef}/>
        </div>
        <div className={classes.buttonGroup}>
          <button type='button' onClick={navigateRoute} className={classes.button} >Cancel</button>
          <button type="submit" className={classes.addtbn}>Add</button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
