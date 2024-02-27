import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "../TodoForm/TodoForm";
import { deleteTodoAction } from "../../ducks/deleteTodo.ducks";
import { fetchTodos } from "../../ducks/fetchTodos.ducks";
import { toggleTodoThunk } from "../../ducks/toggleTodo.ducks";
import { addTodoThunk } from "../../ducks/addTodo.ducks";
import { Button } from "@mui/material";
import Header from "../Header/Header";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.toggleTodo.todo);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const addTodo = (todoContent) => {
    dispatch(addTodoThunk({ content: todoContent, complete: false }));
  };
  return (
    <div>
      <Header />
      <h2>Add Todo</h2>
      <TodoForm addTodo={addTodo} />
      <h2>Todos</h2>
      {todos.length > 0 &&
        todos.map((todo) => (
          <div className="todos" key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodoThunk(todo))}
              className={todo.complete ? "line-through" : "none"}
            >
              {todo.content}
            </span>
            {todo.content !== "" && (
              <Button onClick={() => dispatch(deleteTodoAction(todo.id))}>
                Delete
              </Button>
            )}
          </div>
        ))}
    </div>
  );
};

export default TodoList;
