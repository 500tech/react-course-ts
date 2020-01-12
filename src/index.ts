import { add } from "./utils";

class Pet<T extends string> {
  public name: Maybe<T>;
  public age: number;
  constructor(name: Maybe<T>) {
    this.name = name;
    this.age = 4;
  }

  getName() {
    return this.name;
  }

  getNameFirstLetter() {
    return this.name?.[0];
  }
}

const p = new Pet(null);
// const m = new Pet(4);
console.log(p.getName(), p.getNameFirstLetter());

console.log(add(3, 6));
