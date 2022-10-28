import React from "react";
import { Grid, TextField } from "@mui/material/";
import { Todo } from "../models/model";
import { EditTwoTone, Delete, Check } from "@mui/icons-material/";
import IconButton from "@mui/material/IconButton";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo, setDone } from "../features/todo/todoSlice";
import { useState } from "react";
import "./singleTodo.css";
function SingleTodo({ id, todo, isDone }: Todo) {
  const dispatch: AppDispatch = useDispatch();
  const [edit, setEdit] = useState<boolean>(false);
  const [editedTodo, setEditTodo] = useState<string>(todo);
  const handleEdit = () => {
    if (edit && !isDone) {
      dispatch(editTodo([id, editedTodo]));
    }
    setEdit(!edit);
  };
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      {edit ? (
        <Grid item>
          <TextField
            variant="standard"
            value={editedTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            autoFocus
          />
        </Grid>
      ) : isDone ? (
        <Grid item>
          <p>{todo}</p>
        </Grid>
      ) : (
        <Grid item>
          <span>{todo}</span>
        </Grid>
      )}
      {!isDone && <Grid item>
        <IconButton onClick={handleEdit}>
          <EditTwoTone />
        </IconButton>
      </Grid>}
      <Grid item>
        <IconButton onClick={() => dispatch(removeTodo(id))}>
          <Delete />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton onClick={() => dispatch(setDone(id))}>
          <Check />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default SingleTodo;
