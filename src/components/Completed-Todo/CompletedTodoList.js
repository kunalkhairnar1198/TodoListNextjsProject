import CompletedTodoitem from "./CompletedTodoitem"
import classes from './CompletedTodoList.module.css'

const CompletedTodoList = (props) => {
    console.log(props)

    const completedTodo = props.todos.filter((item)=> item.isCompleted == true)
    console.log(completedTodo)

   return (
    <ul className={classes.list}>

    {completedTodo.map((item,index) => (
      <CompletedTodoitem
        key={index}
        id={item.id}
        title={item.title}
        description={item.description}
        isCompleted={item.isCompleted}
        />
     ))} 
  </ul>
  )
}

export default CompletedTodoList
