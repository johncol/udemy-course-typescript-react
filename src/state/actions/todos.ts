import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';

import { ActionType, FetchTodosAction, DeleteTodoAction } from './types';
import { Todo } from './../../models/todo';
import { urls } from './../../constants/urls';

export const fetchTodos = () => {
  return async (dispatch: Dispatch<FetchTodosAction>) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response: AxiosResponse<Todo[]> = await axios.get<Todo[]>(urls.todos);

    return dispatch({
      type: ActionType.FETCH_TODOS,
      payload: response.data,
    });
  };
};

export const deleteTodo = (todo: Todo): DeleteTodoAction => {
  return {
    type: ActionType.DELETE_TODO,
    payload: todo,
  };
};
