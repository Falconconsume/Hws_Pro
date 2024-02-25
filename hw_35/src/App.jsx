import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToggleAction } from "../src/store/todoList/todoList.action";
import {
  deleteTodo,
  fetchTodos,
  addTodoAction,
} from "./store/todoList/todoList.thunk.js";
import "./index.css";
import Header from "./components/Header/Header.jsx";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CircularProgress from "@mui/material/CircularProgress";

const SignupSchema = Yup.object().shape({
  todo: Yup.string()
    .min(10, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
});

const TodoList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoList.todos);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <h1>TodoList</h1>
      <Formik
        initialValues={{
          todo: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          setIsLoading(true);
          dispatch(
            addTodoAction({
              id: Date.now(),
              content: values.todo,
              complete: false,
            })
          );
          setIsLoading(false);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="todo" />
            {errors.todo && touched.todo ? <div>{errors.todo}</div> : null}
            <button type="submit" disabled={isLoading}>
              {isLoading ? <CircularProgress /> : "Add Todo"}
            </button>
          </Form>
        )}
      </Formik>
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
