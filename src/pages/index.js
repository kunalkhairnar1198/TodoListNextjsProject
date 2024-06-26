import Head from "next/head";
import TodoList from "@/components/TodoList/TodoList";
import { MongoClient } from "mongodb";
import { useEffect } from "react";


 function Home(props) {
 
  console.log(props)
  return (
    <>
      <Head>
        <title>Todo list App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TodoList todos={props.todos}/>
    </>
  );
}

export async function getStaticProps(){

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
export default Home;