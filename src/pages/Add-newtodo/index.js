import TodoForm from '@/components/TodoForm/TodoForm'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const NewTodoPage = () => {
  const route = useRouter()

  const addTodoHandler =async(data)=>{
    const res = await fetch('/api/new-todos',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        'Content-Type':'application/json' 
      }
    });
    const enteredData = await res.json()
    console.log('object',enteredData)

    route.push('/')
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
