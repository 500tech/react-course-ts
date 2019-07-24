import { theme } from "./theme";
import { Theme } from '../types';
import { changeTheme } from '../actions'

test("Initial value makes sense", () => {
  let currentTheme = undefined;
  currentTheme = theme(currentTheme, { type: "FOO BAR MEOW" });
  expect(currentTheme).toBe("light");
});

test('Change theme action actually changes theme', () => {
  let currentTheme: Theme = 'light';
  currentTheme = theme(currentTheme, changeTheme('dark'));
  expect(currentTheme).toBe("dark");
});