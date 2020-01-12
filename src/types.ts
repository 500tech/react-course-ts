// primitives
const a: number = 0;
const b: boolean = true;
const c: null = null;
const d: undefined = undefined;
const e: string = "hello";
const f: object = {};

// tuples
type HTTPResponseMessage = "OK" | "INTERNAL SERVER ERROR" | "NOT FOUND";
type HTTMMessageCode = 200 | 500 | 404;
type NaiveHTTPResponse = [HTTMMessageCode, HTTPResponseMessage];
const nresponse: NaiveHTTPResponse = [200, "OK"]; // What about [1000, 'meow']?

// arrays
const names: string[] = ["John", "Loki"]; // Array<string>
names.push("4");
const arr = [];
arr.push(5);
// what about `const arr = [];` ?
// alias
type ID = number;
const entityId: ID = 5;
// basic object type notation
type StringToNumber = { [k: string]: number };
// But Also:
type AlsoStringToNumber = Record<HTTPResponseMessage, number>;
const o: StringToNumber = {
  hello: 4
};
// literal types
type Greeting = "Hello";
const GREETING: Greeting = "Hello";
// union
type HTTPCode = 100 | 200 | 300 | 400 | 500;
type HTTPResponse = [HTTPCode, HTTPResponseMessage];
const response: HTTPResponse = [200, "OK"];
// interfaces
interface Person {
  name: string;
  age: number;
  address?: {
    city: string;
    line1?: {
      street: string;
      houseNumber: number;
    };
  };
}

const px: Person = {
  name: "",
  age: 4
};

console.log(
  px?.address?.line1?.houseNumber.toExponential(),
  px.address && px.address.line1 && px.address.line1.houseNumber.toExponential()
);

type EntityID = number;
interface Entity {
  id: EntityID;
}
interface User extends Entity {
  username: string;
}

interface PersonWithJob extends Person {
  job: string;
}
type Person2 = {
  name: string;
  age: number;
};
const p: Person & { foo: boolean } = {
  name: "Foo Bar",
  age: 35,
  foo: true
};
