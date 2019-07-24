import { loading, Loading } from "./loading";
import { startAsync, endAsync } from "../actions";

test("Initial value makes sense", () => {
  let state = undefined;
  state = loading(state, { type: "FOO BAR MEOW" });
  expect(state).toEqual({});
});

test("Start and end affect state", () => {
  let state: Loading = {};
  state = loading(state, startAsync("tanya"));
  expect(state.tanya).toBe(1);
  state = loading(state, endAsync("tanya"));
  expect(state.tanya).toBe(0);
});

// test('Async test', done => {
//   setTimeout(() => {
//     expect(1).toEqual(1);
//     done();
//   }, 2000)
// }, 1000);

test("Complex state", () => {
  expect(
    [
      startAsync("foo"),
      startAsync("bar"),
      endAsync("foo"),
      startAsync("foo"),
      startAsync("foo"),
      startAsync("meow"),
      endAsync("bar")
    ].reduce(loading, {})
  ).toEqual({
    foo: 2,
    bar: 0,
    meow: 1
  });
});
