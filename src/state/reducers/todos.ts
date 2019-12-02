import { Todo } from './../../models/todo';
import { ActionType, TodoAction } from './../actions/types';

export const todosReducer = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case ActionType.FETCH_TODOS:
      return action.payload;

    case ActionType.DELETE_TODO:
      const todoToDelete: Todo = action.payload;
      return state.filter((todo: Todo) => todo.id !== todoToDelete.id);

    default:
      return state;
  }
};
