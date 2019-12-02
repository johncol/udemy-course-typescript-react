import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';

import { ActionType, FetchTodosAction } from './types';
import { Todo } from './../../models/todo';
import { urls } from '../../constants/urls';

export const fetchTodos = () => {
  return async (dispatch: Dispatch<FetchTodosAction>) => {
    const response: AxiosResponse<Todo[]> = await axios.get<Todo[]>(urls.todos);

    return dispatch({
      type: ActionType.FETCH_TODOS,
      payload: response.data,
    });
  };
};
