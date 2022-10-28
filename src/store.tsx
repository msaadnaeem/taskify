import { configureStore } from "@reduxjs/toolkit";
import './features/todo/todoSlice'
import todoReducer from "./features/todo/todoSlice"
export const store= configureStore({
    reducer:{
        todoList:todoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;