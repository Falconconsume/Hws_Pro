import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../ducks/todoSlices.ducks";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
  devTools: process.env.NODE_ENV !== "production",
});
