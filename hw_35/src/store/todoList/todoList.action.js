export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addToggleAction = (id) => ({ type: TOGGLE_TODO, payload: id });

