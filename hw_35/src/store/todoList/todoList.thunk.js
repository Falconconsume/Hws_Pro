import { ADD_TODO, DELETE_TODO } from "./todoList.action";

export const fetchTodos = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://65cb708defec34d9ed878725.mockapi.io/Tasks"
    );
    const todos = await response.json();

    dispatch({ type: "FETCH_TODOS", payload: todos });
  };
};

export const addTodoAction = (todo) => {
  return async (dispatch) => {
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

    dispatch({ type: ADD_TODO, payload: newTodo });
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    await fetch(`https://65cb708defec34d9ed878725.mockapi.io/Tasks/${id}`, {
      method: "DELETE",
    });

    dispatch({ type: DELETE_TODO, payload: id });
  };
};
