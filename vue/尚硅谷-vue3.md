# VUE3

## 一.TypeScript快速上手

#### 1.基础类型

> 一种轻量级的为函数或者变量添加的约束

**boolean  number  string  undefined null  any  数组  元组  枚举  void  object**

> undefined和null是所有类型的子类型,可以把他们赋值给任意类型

> `void` 作为类型也可以用于参数和所有其他声明。唯一可以传递的值是 `undefined`：

> 元组类型（长度类型固定的数组）：  let arr:[string, number] = ['11', 22];

> 枚举类型，枚举里面的每个数据叫做元素，每个元素都有自己的编号，编号从0开始，依次增加1

**类型推断  类型断言  联合类型**

> 类型断言两种方式： <类型> 变量名 ;   值 as 类型

#### 2.接口

> 对值所具有的结构进行类型检查，使用接口来定义对象；接口是对象的状态（属性）和行为（方法）的抽象（描述）

> readonly表示只读属性，name?:string 表示可选属性

#### 3.类

> 类可以实现多个接口，最多只能继承一个类，类可以通过继承实现多态（重写父类的方法）

> 类的修饰符： public  private  protected

> readonly修饰符：  只读属性的类属性只能在constructor中修改 或者使用初始值
>
> ​	构造函数中的参数如果使用readonly修饰后，那么该参数就叫做参数属性，且类中也存在了该属性成员，且为只读，外部无法修改
>
> ​	构造函数中的参数也可以使用**`public`**，**`private`**，**`protected`**来修饰

> 抽象类：  abstract修饰的类
>
> ​	不能被实例化，可以有抽象方法和实例方法，一般没有任何具体的实现，也可以有抽象属性，但一般不这么做

#### 4.函数类型

```ts
const fn: (a: number) => number = (a: number): number => {
  return a
}
(a: number) => number 	//表示函数类型
```

#### 5.泛型

> 函数中可以有多个泛型的参数  `function fn<K,V>(v1:K,v2:V)[K,V] { return [v1,v2] }`

> 泛型接口: 定义通用的接口
>
> ```
> interface IBaseCRUD<T> {
>   data: Array<T>
>   add: (t: T) => T
>   getByID: (id: number) => T
> }
> ```

> 泛型类： 在定义类时，为类中的属性或方法定义泛型类型，在创建类的实例时，再指定特定的泛型类型

> 泛型约束： `T extends ILength`

#### 6.声明文件

> npm install --save jquery
>
> npm install --save-dev @types/jquery
>
> jQuery.d.ts:  `declare var jQuery: (selector: string) => any`















































