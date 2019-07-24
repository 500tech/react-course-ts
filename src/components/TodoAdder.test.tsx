import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { TodoAdder2 } from "./TodoAdder";
import { themes } from "../theme";

const AllTheProviders: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={themes.dark}>
      {children as React.ReactChild}
    </ThemeProvider>
  );
};

const renderWithTheme = (tree: Parameters<typeof render>[0]) =>
  render(tree, {
    wrapper: AllTheProviders
  });

test("Is autofocused", () => {
  const onAddTodo = jest.fn();
  const { queryByPlaceholderText } = renderWithTheme(
    <TodoAdder2 onAddTodo={onAddTodo} />
  );
  const input = queryByPlaceholderText("Thing to do...");
  expect(input).not.toBeNull();
  expect(input).toHaveFocus();
});

test("Is disabled when no text", () => {
  const onAddTodo = jest.fn();
  const { getByPlaceholderText, queryByText } = renderWithTheme(
    <TodoAdder2 onAddTodo={onAddTodo} />
  );
  const button = queryByText("Add");
  const input = getByPlaceholderText("Thing to do...");
  expect(button).toHaveAttribute("disabled");
  fireEvent.change(input, { target: { value: "meow" } });
  expect(button).not.toHaveAttribute("disabled");
});

test("Calls fn on click", () => {
  const onAddTodo = jest.fn();
  const { getByPlaceholderText, getByText } = renderWithTheme(
    <TodoAdder2 onAddTodo={onAddTodo} />
  );
  const button = getByText("Add");
  const input = getByPlaceholderText("Thing to do...");
  expect(onAddTodo).toBeCalledTimes(0);
  fireEvent.change(input, { target: { value: "meow" } });
  fireEvent.click(button);
  expect(onAddTodo).toBeCalledTimes(1);
  expect(onAddTodo).toBeCalledWith("meow");
});

test("Auto calls submit", () => {
  const setTimeoutSpy = jest
    .spyOn(window, "setTimeout")
    .mockImplementation((fn: TimerHandler) => {
      (fn as Function)();
      return 4;
    });
  const onAddTodo = jest.fn();
  const { getByPlaceholderText } = renderWithTheme(
    <TodoAdder2 onAddTodo={onAddTodo} />
  );
  const input = getByPlaceholderText("Thing to do...");
  expect(onAddTodo).toBeCalledTimes(0);
  let callCount = onAddTodo.mock.calls.length;
  fireEvent.change(input, { target: { value: "m" } });
  expect(onAddTodo.mock.calls.length).toBeGreaterThan(callCount);
  callCount = onAddTodo.mock.calls.length;
  expect(input).toHaveValue("");
  fireEvent.change(input, { target: { value: "me" } });
  expect(onAddTodo.mock.calls.length).toBeGreaterThan(callCount);
  expect(input).toHaveValue("");
  setTimeoutSpy.mockRestore();
});
