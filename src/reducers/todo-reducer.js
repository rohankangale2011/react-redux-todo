import {
  GET_TODO_DATA,
  ADD_TODO_DATA,
  DELETE_TODO_DATA
} from "../actions/constant";

function todoReducer(state = { data: [] }, action) {
  switch (action.type) {
    case GET_TODO_DATA:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case ADD_TODO_DATA:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
}

export default todoReducer;
