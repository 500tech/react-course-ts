import { useCallback } from "react";
import { useAction, useAppSelector } from "./state";
import * as actions from "../state/actions";
import { Todo } from "../state/types";

export function useTodosService() {
  const todos = useAppSelector(state => state.todos);
  const doAddTodo = useAction(actions.addTodo);
  const doDeleteTodo = useAction(actions.deleteTodo);
  const doEditTodo = useAction(actions.editTodo);

  const toggleTodo = useCallback((todo: Todo) => {
    doEditTodo({
      todoId: todo.id,
      update: {
        completed: !todo.completed
      }
    });
  }, [doEditTodo]);

  const removeTodo = useCallback((todo: Todo) => {
    doDeleteTodo({ todoId: todo.id });
  }, [doDeleteTodo]);

  const addTodo = useCallback(
    (text: string) => {
      doAddTodo({ title: text });
    },
    [doAddTodo]
  );

  return { todos, toggleTodo, removeTodo, addTodo };
}
