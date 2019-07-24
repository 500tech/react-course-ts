import React from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { TodoAdder2 } from "./TodoAdder";
import { TodoList } from "./TodoList";
import { useTodosService } from "../services/todos";

function NoItemsEmptyState() {
  return <p>Oh noes, no items yet! Please create one :)</p>;
}

const SelectedTodo: React.FC<RouteComponentProps<{ todoId: string }>> = ({
  match
}) => {
  const { todos } = useTodosService();
  const { todoId } = match.params;
  const todo = todos.find(({ id }) => +todoId === id);
  if (!todo) {
    return <Redirect to="/404" />;
  }
  return <p>{todo.title}</p>;
};

export default function TodosPage() {
  const { todos, toggleTodo, removeTodo, addTodo } = useTodosService();
  return (
    <>
      <TodoAdder2 onAddTodo={addTodo} />
      {todos.length ? (
        <TodoList
          items={todos}
          onToggleTodo={toggleTodo}
          onRemoveTodo={removeTodo}
        />
      ) : (
        <NoItemsEmptyState />
      )}
      <Route path="/todos/:todoId" component={SelectedTodo} />
    </>
  );
}
