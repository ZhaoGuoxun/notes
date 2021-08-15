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