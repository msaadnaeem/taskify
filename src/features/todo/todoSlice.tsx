import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../models/model";
const todo:Todo[]=[]
const initialState={
    todos:todo
}

const todoSlice=createSlice({
    name:'todoList',
    initialState,
    reducers:{
        addTodo:(state,action: PayloadAction<Todo>)=>{
            state.todos.push(action.payload)
        },
        removeTodo:(state,action: PayloadAction<number>)=>{
            const itemId=action.payload
            state.todos=state.todos.filter((item)=>item.id!==itemId)

        },
        editTodo:(state,action)=>{
            const [itemId,editedTodo]=action.payload
            state.todos.forEach((todo)=>{
                if(todo.id===itemId){
                    todo.todo=editedTodo
                }
            })
        },
        setDone:(state,action: PayloadAction<number>)=>{
            const itemId=action.payload
            state.todos.forEach((todo)=>{
                if(todo.id===itemId){
                    todo.isDone=!todo.isDone
                }
            })
        }
    }
})


export const {addTodo,removeTodo,editTodo,setDone}=todoSlice.actions
export default todoSlice.reducer