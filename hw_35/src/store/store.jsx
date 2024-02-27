import { configureStore } from "@reduxjs/toolkit";
import addTodo from "../ducks/addTodo.ducks";
import deleteTodo from "../ducks/deleteTodo.ducks";
import toggleTodo from "../ducks/toggleTodo.ducks";
import fetchTodos from "../ducks/fetchTodos.ducks";

const rootReducer = {
  addTodo,
  deleteTodo,
  toggleTodo,
  todos: fetchTodos,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
