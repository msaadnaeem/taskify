import React from 'react'
import SingleTodo from './singleTodo'
import { useSelector } from './customSelector'
const TodoList:React.FC = () => {
    const list=useSelector((store)=>store.todoList.todos)
    
  return (
    <div>
        {list.map((todo)=>{
            return <SingleTodo key={todo.id} {...todo}/>
        })}
    </div>
  )
}

export default TodoList