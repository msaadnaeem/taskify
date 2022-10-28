import React from 'react'
import {TextField, Grid} from '@mui/material/';
import {Add} from '@mui/icons-material/';
import IconButton from '@mui/material/IconButton';
import { addTodo } from '../features/todo/todoSlice';
import { AppDispatch } from '../store';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
const InputField = () => {
    const dispatch:AppDispatch=useDispatch()
    const [todo,setTodo]=useState<string>('') 
    const handleAdd=()=>{
        const id=Number(Date.now())
        if(todo){
            dispatch(addTodo({id,todo,isDone:false}))
            setTodo('')
    }}
  return (
    <Grid container direction="row"
    spacing={2}
    justifyContent="center"
    alignItems="center">
    <Grid item >
      <TextField label="Enter a Task" variant="standard" value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
    </Grid>
    <Grid item >
        <IconButton onClick={handleAdd}>
            <Add/>
        </IconButton>
    </Grid>
  </Grid>
  )}
  
export default InputField