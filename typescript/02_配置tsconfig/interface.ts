(() => {



  interface Person {
    readonly name: string;
    age: number;

    sleep(): void;
  }

  class China implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sleep() {
      console.log('i am sleeping')
    }
  }


  const a = new China('zhangsna', 20);
  a.name = 'lisi';

})()


class A {
  constructor(public name: string, age: number) {
    this.name = 'gsg';
  }
}

function fn(a: number): string {
  return a + '' as string
}

function fn1<T>(a: T): T {
  return a
}


fn(10)
fn1<String>(1 + 'a'); //指定泛型


function fn2<T, K>(a: T, b: K) {
  return a
}

interface Inter {
  length: number
}
function fn3<T extends Inter>() {

}