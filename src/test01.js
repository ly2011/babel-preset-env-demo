import 'babel-polyfill';

class App {
  constructor(name = '刘德华', age = 20) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return `${this.name} age is ${this.age}`;
  }
}

const app = new App();
console.log(app.getName());
const arr = [1, 3, 5, 7, 9];
console.log([...arr]);
