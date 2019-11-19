import { add } from "./utils";

class Pet<T extends string> implements Person {
  public name: T;
  public age: number;
  constructor(name: T) {
    this.name = name;
    this.age = 4;
  }

  getName() {
    return this.name;
  }
}

const p = new Pet("meow");
// const m = new Pet(4);
console.log(p.getName());

console.log(add(3, 6));
