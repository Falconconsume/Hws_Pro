import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./todoList.action.js";

const initialState = {
  todos: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const newState = {
        ...state,
        todos: [...state.todos, action.payload],
      };
      return newState;
    }
    case DELETE_TODO: {
      const newState = {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload),
      };
      return newState;
    }
    case TOGGLE_TODO: {
      const newState = {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        ),
      };
      return newState;
    }

    default: {
      return state;
    }
  }
}
