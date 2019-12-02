import { Todo } from './../../models/todo';

export enum ActionType {
  FETCH_TODOS,
}

export interface FetchTodosAction {
  type: ActionType.FETCH_TODOS;
  payload: Todo[];
}

export type TodoAction = FetchTodosAction;
