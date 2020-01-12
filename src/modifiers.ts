const x: number = 5;

function foo(a: typeof x) {
  return [a, typeof x];
}

foo(3);

interface Dimensions {
  height: number;
  width: number;
}

interface TV {
  brand: string;
  size: Dimensions;
}

function getProp<T extends object>(tv: T, prop: keyof T) {
  return tv[prop];
}

getProp({ foo: 4 }, "foo");

function add(x: number, y: number) {
  return x + y;
}

type RT<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer U
  ? U
  : never;

let y: RT<typeof add>;
let z: RT<5>;

interface Action<P> {
  type: string;
  payload?: P;
}

const dispatch = (action: any) => void action;

type ActionCreator<P> = (payload: P, foo: number, bar: string) => Action<P>;

const setTheme: ActionCreator<string> = theme => ({
  type: "fds",
  payload: theme
});

type VoidedFn<T> = T extends (...args: infer P) => any
  ? (...args: P) => void
  : never;

type F = typeof setTheme;

const setThemeWithDispatch: VoidedFn<F> = theme => dispatch(setTheme(theme, 5, 'gdfg'));
