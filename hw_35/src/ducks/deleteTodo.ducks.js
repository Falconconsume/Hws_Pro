import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/****************************************
 * DUCKS
 ****************************************/

const initialState = {
  todo: [],
};

const deleteTodo = createSlice({
  name: "deleteTodo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteTodoAction.fulfilled, (state, action) => {
      state.todo = state.todo.filter((el) => el.id !== action.payload);
    });
  },
});

export default deleteTodo.reducer;

// THUNK

export const deleteTodoAction = createAsyncThunk(
  "deleteTodo/deleteTodoThunk",
  async (todo) => {
    await fetch(
      `https://65cb708defec34d9ed878725.mockapi.io/Tasks/${todo.id}`,
      {
        method: "DELETE",
      }
    );
  }
);
