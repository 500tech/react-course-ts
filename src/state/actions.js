export const setTheme = theme => ({
  type: 'SET_THEME',
  payload: theme,
});

export const fetchTodos = () => ({
  type: 'FETCH_TODOS',
  meta: {
    api: {
      // everything axios
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/todos',
      // everything middleware
      onSuccess: 'SET_TODOS',
      onFailure: 'ALERT_ERROR',
    },
  },
});

export const addTodo = title => ({
  type: 'ADD_TODO',
  payload: title,
  meta: {
    api: {
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/todos',
      data: {
        title,
        completed: false,
      },
      onSuccess: 'CREATE_TODO',
    },
  },
});

export const removeTodo = todoId => ({
  type: 'REMOVE_TODO',
  payload: todoId,
});

export const updateTodo = (todoId, patch) => ({
  type: 'UPDATE_TODO',
  payload: { todoId, patch },
});
