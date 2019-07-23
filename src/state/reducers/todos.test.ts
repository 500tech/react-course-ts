import { todos } from "./todos";
import { addTodo, editTodo } from "../actions";
import { Todo } from '../types'

test("no-op does nothing", () => {
  const initialState: Todo[] = [];
  expect(todos(initialState, { type: "bla bla" })).toBe(initialState);
  const someState = [
    {
      id: "foo",
      text: "dfsdfs",
      done: false
    }
  ];
  expect(todos(someState, { type: "bla bla" })).toBe(someState);
});

test("addTodo", () => {
  const oldState: Todo[] = [];
  const newState = todos(oldState, addTodo({ text: "foo bar" }));
  expect(newState).toHaveLength(1);
  expect(newState[0].text).toBe("foo bar");
  expect(newState[0].done).toBe(false);
});

test("editTodo", () => {
  let state = [
    {
      id: "foo",
      text: "dfsdfs",
      done: false
    }
  ];
  state = todos(
    state,
    editTodo({
      todoId: "foo",
      update: {
        done: true
      }
    })
  );
  expect(state[0].done).toBeTruthy();
});
