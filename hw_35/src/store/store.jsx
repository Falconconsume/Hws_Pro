import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../ducks/todoSlices.ducks";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // To avoid serializable state errors for functions during development
    }).concat(/* any other middleware you may have */),
  devTools: process.env.NODE_ENV !== "production",
});
