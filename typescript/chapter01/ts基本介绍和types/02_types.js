"use strict";
// 直接赋值,会自动判断类型
// let a = false;
// a = 12;
// 字面量类型
// | 表示连接不同的类型
// let a: 'zhhj' | 'zgx';
// a = 'zgx'
// let a: boolean | string;
// a = 'zgx0'
// a = false
// 相当于 let a:any;
// let a;
// a = 10;
// a = false;
// unknown也不会做类型检查
// let a: unknown = 'hello';
// a = false;
// a = 100;
// let b: number = a;   //会报错
// any类型的变量可以赋值给任意类型的变量,unknown则不能
// let a: any = false;
// let b: string = a;
// console.log(b);
// let a: unknown = []
// let b: [];
// if (Array.isArray(a)) {
//   b = a;
// }
// as string 可以将unknown类型的变量断言为string,完成赋值
// <string>a 同as string
// let a: unknown = 10;
// let b = 'hello'
// // b = a as string
// b = <string>a
// console.log(typeof b)
// void 返回空值
// function fn(): void {
// }
// // never  没有任何返回
// function fn2(): never {
//   throw new Error('error');
// }
// 用来指定对象的结构
// age?:number表示属性可选
// [propName:string]:any  表示可以添加任意多个属性
// let o: { name: string, age?: number, [propName: string]: any };
// 设置函数结构的类型声明
// let f: (a: number, b: number) => number;
// f = function (n1, n2) {
//   return n1 + n2
// }
// let e: string[];    //字符串数组
// e = ['a', 2]
// let g: Array<number>;  //同 :number[]
// g = [1, 2, 3, 'd']
// 元祖
// let h: [string, number];
// h = ['a', 1];
// 枚举 enum
// enum Gender {
//   male = 0,
//   female = 1
// }
// let i: { name: string, gender: Gender };
// i = {
//   name: '孙悟空',
//   gender: Gender.male
// }
// 类的别名
// type myType = 1 | 2 | 3 | 4 | 5;
// let m: myType = 5;
