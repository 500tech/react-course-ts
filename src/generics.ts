type Pair<T, U> = [T, U];
function first<T, U>(pair: Pair<T, U>): T {
  return pair[0];
}
const v = first([3, "32"]);
// --- //
type MaybeNumber = null | number;
type Maybe<T> = T | null | undefined;

type KeyValue<V> = {
  [key: string]: V;
};
function get<T>(o: KeyValue<T>, key: string): Maybe<T> {
  return o[key];
}
const obj = { hello: "world" };
const user = get(obj, "hello");
// user.length // error
console.log(user && user.length);

function join(strings: string[], delimiter?: string): string {
  return strings.join(delimiter);
}
join(["hello"]);
