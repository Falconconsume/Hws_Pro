import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/****************************************
 * THUNK
 ****************************************/

export const addTodoThunk = createAsyncThunk(
  "addTodo/addTodoThunk",
  async (todo) => {
    const response = await fetch(
      "https://65cb708defec34d9ed878725.mockapi.io/Tasks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      }
    );
    const newTodo = await response.json();

    return newTodo;
  }
);

/****************************************
 * DUCKS
 ****************************************/
const initialState = {
  todo: [],
};

const addTodoSlice = createSlice({
  name: "addTodo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo = [...state.todo, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTodoThunk.fulfilled, (state, action) => {
      state.todo.push(action.payload);
    });
  },
});

export const { addTodo } = addTodoSlice.actions;
export const selectAddTodo = (state) => state.addTodo.todo;
export default addTodoSlice.reducer;
