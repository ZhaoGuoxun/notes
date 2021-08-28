export default class Snake {

  element: HTMLElement;
  head: HTMLElement;
  bodies: HTMLCollection;


  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div')!;
    this.bodies = this.element.getElementsByTagName('div');
  }

  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }
  set X(value: number) {
    if (this.X === value) return
    // 撞墙
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了')
    }

    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      value = value > this.X ? this.X - 10 : this.X + 10;
    }

    this.moveBody();
    this.head.style.left = value + 'px';
    this.checkBody()
  }
  set Y(value: number) {
    if (this.Y === value) return
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了')
    }

    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      value = value > this.Y ? this.Y - 10 : this.Y + 10;
    }

    this.moveBody();
    this.head.style.top = value + 'px';
    this.checkBody()
  }

  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }

  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }

  checkBody() {
    for (let i = 1; i < this.bodies.length; i++) {
      let body = this.bodies[i] as HTMLElement;

      if (this.X == body.offsetLeft && this.Y == body.offsetTop) {
        throw new Error('游戏结束')
      }
    }
  }
}