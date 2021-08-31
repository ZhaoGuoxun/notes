// abstract class animal {
//   name: string = 'ddd'
// }

// class Dog extends animal {
//   speak() {
//     console.log(this.name);
//   }
// }


// const a = new Dog()
// console.log(a);


// const fn: (a: number) => number = (a: number): number => {
//   return a
// }

// // console.log(fn(1));


// // function add(x: number | string, y: number | string) {
// //   return x + y
// // }

// // ∥/函数重载声明
// function add(x: string, y: string): string
// function add(x: number, y: number): number
// // ∥/函数声明
// function add(x: string | number, y: string | number): string | number {
//   if (typeof x === 'string' && typeof y == 'string') {
//     return x + y//字符串拼接
//   }
//   else if (typeof x == 'number' && typeof y == 'number') {
//     return x + y//数字相加
//   } else {
//     return <string>x + y
//   }
// }
// // ∥/函数调用 两个参数都是字符串
// console.log(add('诸葛', '孔明'))
// // / 两个参数都是数字
// console.log(add(10, 20))
// // / 此时如果传入的是非法的数据, ts应该给我提示出错误的信息内容, 报红色错误的信息
// // console.log(add('真香', 10))
// // console.log(add(100, '真好'))

function test<User>(a: User): User {
  return a
}

console.log(test(1));


interface IBaseCRUD<T> {
  data: Array<T>
  add: (t: T) => T
  getByID: (id: number) => T
}

interface ILength {
  length: number
}
function t1<T extends ILength>(x: T): number {
  return x.length
}

// t1('dfa')
// t1([])
// t1(123)