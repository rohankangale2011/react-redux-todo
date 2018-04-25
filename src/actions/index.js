import { GET_TODO_DATA, ADD_TODO_DATA, DELETE_TODO_DATA } from "./constant";

export function getTodoData() {
  return {
    type: GET_TODO_DATA
  };
}

export function addTodoData(payload) {
  return {
    type: ADD_TODO_DATA,
    payload
  };
}

export function deleteTodoData(payload) {
  return {
    type: DELETE_TODO_DATA,
    payload
  };
}
