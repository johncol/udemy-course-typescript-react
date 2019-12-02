import { combineReducers, Reducer, AnyAction } from 'redux';
import { todosReducer } from './todos';
import { Todo } from './../../models/todo';

export interface StoreState {
  todos: Todo[];
}

export const reducers: Reducer<StoreState, AnyAction> = combineReducers<StoreState>({
  todos: todosReducer,
});
