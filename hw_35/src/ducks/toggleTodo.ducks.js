import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// DUCKS

const initialState = {
  todo: [],
};

const toggleTodoSlice = createSlice({
  name: "toggleTodo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(toggleTodoThunk.fulfilled, (state, action) => {
      state.todo = state.todo.map((todo) =>
        todo.id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo
      );
    });
  },
});

export default toggleTodoSlice.reducer;

// THUNK

export const toggleTodoThunk = createAsyncThunk(
  "toggleTodo/toggleTodoThunk",
  async (todo) => {
    const response = await fetch(
      `https://65cb708defec34d9ed878725.mockapi.io/Tasks/${todo.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ complete: !todo.complete }),
      }
    );

    const updatedTodo = await response.json();

    return updatedTodo;
  }
);
