import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';

function count(state = 0, action) {
  switch (action.type) {
    case 'increment': {
      const { payload = 1 } = action;
      return state + payload;
    }
    case 'decrement': {
      const { payload = 1 } = action;
      return state - payload;
    }
    default:
      return state;
  }
}

function ticker(state = 0, action) {
  switch (action.type) {
    case 'increment':
    case 'decrement': {
      return state + 1;
    }
    default:
      return state;
  }
}

let _id = 0;
const getId = () => _id++;

function todos(todos = [], action) {
  switch (action.type) {
    case 'add_todo': {
      const title = action.payload;
      const todo = { id: getId(), title, completed: false };
      return [todo, ...todos];
    }
    case 'delete_todo': {
      const todoId = action.payload;
      return todos.filter(todo => {
        return todo.id !== todoId;
      });
    }
    case 'toggle_todo': {
      const todoId = action.payload;
      return todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    }
    case 'sync_todos':
      return [
        ...todos,
        ...action.payload.map(serverTodo => ({
          id: serverTodo.id,
          title: serverTodo.title,
          completed: serverTodo.completed,
        })),
      ];
    default:
      return todos;
  }
}

const api = store => next => async action => {
  next(action);
  if (action.meta && action.meta.api) {
    const { url, onSuccess } = action.meta.api;
    const response = await fetch(url);
    const payload = await response.json();
    store.dispatch({ type: onSuccess, payload });
  }
};

export const store = createStore(
  combineReducers({
    count,
    ticker,
    todos,
  }),
  applyMiddleware(reduxLogger, api)
);
