import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch(
    "https://65cb708defec34d9ed878725.mockapi.io/Tasks/"
  );
  const data = await response.json();
  return data;
});

export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
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
});

export const toggleTodo = createAsyncThunk("todos/toggleTodo", async (id) => {
  const response = await fetch(
    `https://65cb708defec34d9ed878725.mockapi.io/Tasks/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: true }),
    }
  );
  const updatedTodo = await response.json();
  return updatedTodo;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await fetch(`https://65cb708defec34d9ed878725.mockapi.io/Tasks/${id}`, {
    method: "DELETE",
  });
  return id;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (todo) => todo.id === action.payload.id
        );
        state.data[index] = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.data = state.data.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todosSlice.reducer;
