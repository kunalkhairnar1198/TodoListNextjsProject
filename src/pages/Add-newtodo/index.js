import TodoForm from '@/components/TodoForm/TodoForm'
import Head from 'next/head'
import React from 'react'

const NewTodoPage = () => {
  const addTodoHandler =(data)=>{
    console.log('object',data)
  }
  return (
    <div>
      <Head>
          <title>Add new Todo</title>
          <meta 
          name='description'
          content='Add your own todo and create amazing networking challenging todos'
          />
        </Head>
      <TodoForm onAddTodo={addTodoHandler}/>
    </div>
  )
}

export default NewTodoPage
