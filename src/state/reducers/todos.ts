import { Todo } from './../../models/todo';
import { FetchTodosAction } from './../actions/index';
import { ActionType } from './../actions/types';

export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionType.FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};
