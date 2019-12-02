import { Todo } from './../../models/todo';
import { ActionType, TodoAction } from './../actions/types';

export const todosReducer = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case ActionType.FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};
