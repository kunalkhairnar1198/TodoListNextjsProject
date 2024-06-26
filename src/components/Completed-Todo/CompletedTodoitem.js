import { useRouter } from 'next/router'
import Card from '../ui/Card'
import classes from './CompletedTodoitem.module.css'

const CompletedTodoitem = (props) => {
  const rout = useRouter()
  const deletTodoHandler =async(id)=>{
    const res = await fetch('/api/new-todos',{
      method:'PUT',
      body:JSON.stringify(id),
      headers:{
        'Content-Type':'application/json'
      }
    })
    
    if(res.ok){
    rout.replace('/completed-task')
      console.log('delete the todo',res)
    }
    console.log(id)
  }
  
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          {/* <input
            type="checkbox"
            className={classes.check}
            checked={isComplete}
            onChange={toggleCompleteHandler}
          /> */}
          <div className={classes.textContent}>
            <h3 >{props.title}</h3>
            <p className={classes.desc} >{props.description}</p>
          </div>
          <div className={classes.actions}>
            <button onClick={()=>deletTodoHandler(props.id)}>Delete</button>
          </div>
        </div>
      </Card>
    </li>

  )
}

export default CompletedTodoitem
