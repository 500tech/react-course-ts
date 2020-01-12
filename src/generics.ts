type Pair<T, U = T> = [T, U];

function first<T, U>(pair: Pair<T, U>): T {
  return pair[0];
}

const v = first([3, 4]);
// --- //
type MaybeNumber = null | number;
type Maybe<T> = T | null | undefined;
// let x: Maybe<string> = 1;

type KeyValue<V> = {
  [key: string]: V;
}; // type KeyValue<V> = Record<string, V>
function get<T>(o: KeyValue<T>, key: string): Maybe<T> {
  return o[key];
}
const obj = { hello: "world" };
const user = get(obj, "hello");
// user.length // error
console.log(
  user?.length?.toExponential(),
  user && user.length.toExponential()
);

const username = user ?? 'default';

function join(strings: string[], delimiter?: string): string {
  return strings.join(delimiter);
}
join(["hello"]);
