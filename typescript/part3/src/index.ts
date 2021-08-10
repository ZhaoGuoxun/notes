function add(a: number, b: number): number {
  return a + b
}

console.log(add(12, 32));


abstract class Animal {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  abstract sayHello(): void;
}

class Dog extends Animal {
  sayHello() {
    return 123
  }
}

let a = new Dog('zhhj', 1);
console.log(a.sayHello());


// abstract 抽象类不可被实例化
// let b = new Animal('she', 2);
// b.sayHello();

type Keys = "firstname" | "surname"
type DudeType = {
  [key in Keys]: string
}
const test: DudeType = {
  firstname: "Pawel",
  surname: "Grzybek"
}
