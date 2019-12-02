import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';

import { ActionType } from './types';
import { Todo } from './../../models/todo';
import { urls } from '../../constants/urls';

export interface FetchTodosAction {
  type: ActionType.FETCH_TODOS;
  payload: Todo[];
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch<FetchTodosAction>) => {
    const response: AxiosResponse<Todo[]> = await axios.get<Todo[]>(urls.todos);

    return dispatch({
      type: ActionType.FETCH_TODOS,
      payload: response.data,
    });
  };
};
