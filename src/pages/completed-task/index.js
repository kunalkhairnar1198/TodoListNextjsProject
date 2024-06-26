import CompletedTodoList from '@/components/Completed-Todo/CompletedTodoList'
import { MongoClient } from 'mongodb'
import React from 'react'

const index = (props) => {
  return (
    <div>
      <CompletedTodoList todos={props.todos}/>
    </div>
  )
}

export async function getStaticProps() {
    // fetch data for a single meetup
  
  const client = await  MongoClient.connect('mongodb+srv://kunalk200:aRKDhhPdiQFpJdkU@cluster0.4vczsp6.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0')
  const db =client.db()

  const todosCollection = db.collection('todos')
  const todos = await todosCollection.find().toArray()
  console.log(todos)
  client.close()

      return {
        props:{
          todos: todos.map(todo =>({
            title:todo.title,
            description:todo.description,
            isCompleted:todo.isComplete,
            id:todo._id.toString()
          }))
        },
        revalidate: 1
      }

  }

export default index
