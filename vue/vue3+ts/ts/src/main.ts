// console.log('hello ts')

// let und: undefined = undefined
// // let a: number = und;
// // console.log(a);

// let arr: Array<number | string> = [1, 2, 'abc']
// console.log(arr);

// // let vd:void = undefined
// // console.log(vd);

// interface IPerson {
//   name: string,
//   age?: number,
//   readonly address: string
// }

// const person: IPerson = {
//   name: 'zgx',
//   address: 'nanjing',
//   age: 1
// }
// // person.address = 'dfa'
// console.log(person)

// // class Person implements IPerson {
// //   name: string
// //   age?: number
// //   address: string

// //   constructor() {
// //     this.name = 'zzz'
// //     // this.age = 10
// //     this.address = ''
// //   }
// // }

// interface ISearch {
//   (source: string, target: string): boolean
// }

// const queryString = function (source: string, target: string): boolean {
//   return source.search(target) > -1
// }

// class A {

// }
// class B {

// }

// // class C extends A implements IPerson {

// // }


class Person {
  protected name: string
  constructor(name: string) {
    this.name = 'person'
  }
}

class Student extends Person {
  // public name: string
  // constructor(name: string) {
  //   super(name)
  //   // this.name = name
  // }
  speak() {
    console.log(this.name);
  }
}

const s = new Student('ddd');
console.log(s);

// console.log((s as object).__proto__)
