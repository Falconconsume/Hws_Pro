import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoAction,
  addToggleAction,
  deleteTodo,
  fetchTodos,
} from "../src/store/todoList/todoList.action";
import "./index.css";

const TodoList = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoList.todos);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const addTodo = () => {
    dispatch(
      addTodoAction({ id: Date.now(), content: input, complete: false })
    );
    setInput("");
  };

  return (
    <div className="container">
      <h1>TodoList</h1>
      <input
        type="text"
        placeholder="Enter your todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add тодушку</button>

      {todos.map((todo) => (
        <div className="todos" key={todo.id}>
          <span
            onClick={() => dispatch(addToggleAction(todo.id))}
            className={todo.complete ? "line-through" : "none"}
          >
            {todo.content}
          </span>
          {todo.content !== "" && (
            <button
              className="button"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
