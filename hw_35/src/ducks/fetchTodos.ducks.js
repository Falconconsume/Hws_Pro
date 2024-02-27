import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch(
    "https://65cb708defec34d9ed878725.mockapi.io/Tasks/"
  );
  const data = await response.json();
  return data;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return state.concat(action.payload);
    });
  },
});

export default todosSlice.reducer;
