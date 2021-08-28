export default class ScorePanel {
  score: number = 0;
  level: number = 1;
  scoreEl: HTMLElement;
  levelEl: HTMLElement;

  maxLevel = 10

  constructor() {
    this.scoreEl = document.getElementById('score')!;
    this.levelEl = document.getElementById('level')!;
  }

  addScore() {
    this.scoreEl.innerText = ++this.score + '';
    if (this.score % 10 == 0) {
      this.levelUp();
    }
  }

  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEl.innerText = ++this.level + '';
    }
  }

}
