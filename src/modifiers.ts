type FragmentFactory<T extends object> = (base: T) => Partial<T>;

function mergeInto<T extends object>(main: T, factory: FragmentFactory<T>): T {
  return { ...main, ...factory(main) };
}

const person = {
  name: "Foo",
  age: 35
};


const personAfterBirthday = mergeInto(person, person => {
  return {
    age: person.age + 1,
  };
});
