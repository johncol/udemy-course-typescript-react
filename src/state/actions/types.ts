import { Todo } from './../../models/todo';

export enum ActionType {
  FETCH_TODOS,
  DELETE_TODO,
}

export interface FetchTodosAction {
  type: ActionType.FETCH_TODOS;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionType.DELETE_TODO;
  payload: Todo;
}

export type TodoAction = FetchTodosAction | DeleteTodoAction;
