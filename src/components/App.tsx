import React from 'react';
import { connect } from 'react-redux';

import { Todo } from './../models/todo';
import { StoreState } from './../state/reducers';
import { fetchTodos, deleteTodo } from './../state/actions';
import { Loader } from './loader/Loader';
import './app.css';

interface PropsState {
  todos: Todo[];
}

interface PropsActions {
  fetchTodos: () => void;
  deleteTodo: (todo: Todo) => void;
}

interface Props extends PropsState, PropsActions {}

interface State {
  fetching?: boolean;
}

class AppComponent extends React.Component<Props, State> {
  state: State = {};

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.todos.length === 0 && this.props.todos.length > 0) {
      this.setState({ fetching: false });
    }
  }

  render = (): JSX.Element => {
    return (
      <div className="todos">
        <h1 className="todos__title">Just another TODOs Sample App</h1>
        <Loader when={this.state.fetching} />

        {this.props.todos.length === 0 && (
          <button className="todos__btn-fetch" onClick={this.fetchTodos}>
            Click here to fetch the TODOs list
          </button>
        )}

        <ul className="todos__list">
          {this.props.todos.map((todo: Todo) => {
            return (
              <li key={todo.id} className="todos__item">
                <span className="todos__item-title">{todo.title}</span>
                <button className="todos__item-btn-delete" onClick={() => this.props.deleteTodo(todo)}>
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  fetchTodos = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };
}

const stateToProps = (state: StoreState): PropsState => {
  return { todos: state.todos };
};

const actions: PropsActions = { fetchTodos, deleteTodo };

export const App = connect(stateToProps, actions)(AppComponent);
