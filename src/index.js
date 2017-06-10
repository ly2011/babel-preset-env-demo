import 'babel-polyfill';

class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
const person = new Person('yy');
console.log(person.getName());
const arr = [1, 3, 5, 7, 9];
console.log([...arr]);
console.log(person.foo());
export default Person;
