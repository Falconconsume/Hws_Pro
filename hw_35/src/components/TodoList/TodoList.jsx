// TodoList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "../TodoForm/TodoForm";
import Header from "../Header/Header";
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  toggleTodo,
} from "../../ducks/todoSlices.ducks";
import { Button, List, ListItem, ListItemText } from "@mui/material";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.data);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <Header />
      <h2>Add Todo</h2>
      <TodoForm addTodo={handleAddTodo} />
      <h2>Todos</h2>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText
              onClick={() => handleToggle(todo.id)}
              sx={{ textDecoration: todo.completed ? "line-through" : "none" }}
              primary={todo.text}
            />
            <Button onClick={() => handleDelete(todo.id)}>Delete</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
