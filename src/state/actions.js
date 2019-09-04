export const setTheme = theme => ({
  type: 'SET_THEME',
  payload: theme,
});

export const addTodo = title => ({
  type: 'ADD_TODO',
  payload: title,
});

export const removeTodo = todoId => ({
  type: 'REMOVE_TODO',
  payload: todoId,
});

export const updateTodo = (todoId, patch) => ({
  type: 'UPDATE_TODO',
  payload: { todoId, patch },
});
