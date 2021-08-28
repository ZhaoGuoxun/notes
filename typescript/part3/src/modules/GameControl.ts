import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

export default class GameControl {
  snake: Snake
  food: Food
  scorePanel: ScorePanel

  direction: string = 'Right';
  isLive: boolean = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
  }

  init() {
    document.addEventListener('keydown', this.keydownHandler);
    this.run();
  }

  keydownHandler = (e: any) => {
    this.direction = e.key;
  }

  run() {
    let x = this.snake.X
    let y = this.snake.Y

    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        y -= 10;
        break;
      case 'ArrowDown':
      case 'Down':
        y += 10;
        break;
      case 'ArrowLeft':
      case 'Left':
        x -= 10;
        break;
      case 'ArrowRight':
      case 'Right':
        x += 10;
        break;
    }

    this.checkEat(x, y)

    try {
      this.snake.X = x;
      this.snake.Y = y;
    } catch (e) {
      alert(e.message)
      this.isLive = false;
    }

    this.isLive && setTimeout(this.run.bind(this), 200);
  }

  checkEat(x: number, y: number) {
    if (x === this.food.X && y === this.food.Y) {
      this.food.change()
      this.scorePanel.addScore()
      this.snake.addBody()
    }
  }
}