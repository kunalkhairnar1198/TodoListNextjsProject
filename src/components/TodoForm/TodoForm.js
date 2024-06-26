import React, { useRef } from 'react';
import classes from './TodoForm.module.css';
import { useRouter } from 'next/router';

const TodoForm = (props) => {
    const route = useRouter()
    const todoTextRef =  useRef()
    const descRef = useRef()

    const submitHandler =(event)=>{
      event.preventDefault();

        const todoText = todoTextRef.current.value;
        const descText = descRef.current.value;
      
      
        const todoObj = {
          title: todoText,
          description: descText,
          isComplete : false,
        }
        console.log(todoObj)
      
        props.onAddTodo(todoObj)

        todoTextRef.current.value=''
        descRef.current.value =''
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
          <input type='text' className={classes.input} placeholder='Task Name' ref={todoTextRef}/>
          <textarea className={classes.textarea} placeholder='Description'  ref={descRef}/>
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
