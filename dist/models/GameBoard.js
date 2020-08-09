import { Matrix } from './Matrix.js';

const coinSound = new Audio('./assets/sounds/collect.mp3');

export class GameBoard extends Matrix {
  constructor(rows, columns) {
    super(rows, columns);
    this.rowsNum = rows;
    this.columnsNum = columns;
    this.player1 = { x: 0, y: 0, icon: 'p1', score: 0 };
    this.player2 = { x: rows - 1, y: columns - 1, icon: 'p2', score: 0 };
    this.coins = 0;
  }

  loadPlayers() {
    this.matrix[this.player1.x][this.player1.y] = this.player1.icon;
    this.matrix[this.player2.x][this.player2.y] = this.player2.icon;
  }

  loadCoins() {
    const ratio = 0.5;
    const coinsAmount = Math.floor(this.rowsNum * this.columnsNum * ratio);
    for (let c = 0; c < coinsAmount; c++) {
      let x = Math.floor(Math.random() * Math.floor(this.rowsNum));
      let y = Math.floor(Math.random() * Math.floor(this.columnsNum));
      if (this.matrix[x][y] === 'e') {
        this.coins++;
        this.matrix[x][y] = 'C';
      }
    }
  }

  loadWalls() {
    const wallsRatio = 0.2;
    const walls = Math.floor(this.rowsNum * this.columnsNum * wallsRatio);
    for (let w = 0; w < walls; w++) {
      let x = Math.floor(Math.random() * Math.floor(this.rowsNum));
      let y = Math.floor(Math.random() * Math.floor(this.columnsNum));
      if (this.matrix[x][y] === 'e') {
        this.matrix[x][y] = 'W';
      }
    }
  }

  loadGame() {
    this.loadPlayers();
    this.loadWalls();
    this.loadCoins();
    this.wallsValidation();
  }

  move(direction, player) {
    let newPos = { x: player.x, y: player.y };

    direction === 'left'
      ? newPos.y--
      : direction === 'right'
      ? newPos.y++
      : direction === 'up'
      ? newPos.x--
      : direction === 'down'
      ? newPos.x++
      : null;

    if (this.matrix[newPos.x][newPos.y] === 'C') {
      player.score++;
      this.coins--;
      this.matrix[player.x][player.y] = 'e';
      player.x = newPos.x;
      player.y = newPos.y;
      this.loadPlayers();
      coinSound.pause();
      coinSound.currentTime = 0;
      coinSound.play();
    } else if (this.matrix[newPos.x][newPos.y] === 'e') {
      this.matrix[player.x][player.y] = 'e';
      player.x = newPos.x;
      player.y = newPos.y;
      this.loadPlayers();
    } else if (
      !this.matrix[newPos.x][newPos.y] ||
      this.matrix[newPos.x][newPos.y] !== 'e'
    ) {
      console.log(`im sorry im afraid i can't do that`);
    }
  }

  //validate wall positioning NOT WORKING YET
  wallsValidation() {
    let scroller = { x: 0, y: 0 };
    let newPos = scroller;

    const moveRight = () => {
      newPos.y++;
      if (
        this.matrix[newPos.x][newPos.y] === 'W' ||
        !this.matrix[newPos.x][newPos.y]
      ) {
        return false;
      } else {
        scroller.y++;
        return scroller;
      }
    };

    const moveDown = () => {
      newPos.x++;
      if (
        this.matrix[newPos.x][newPos.y] === 'W' ||
        !this.matrix[newPos.x][newPos.y]
      ) {
        return false;
      } else {
        scroller.x++;
        return scroller;
      }
    };
    let last = 'down';
    while (scroller.x !== this.player2.x && scroller.y !== this.player2.y) {
      if (last === 'down') {
        if (moveRight()) {
          last = 'right';
          if (scroller.x === this.player2.x && scroller.y === this.player2.y) {
            return true;
          }
        } else if (moveDown()) {
          last = 'down';
          if (scroller.x === this.player2.x && scroller.y === this.player2.y) {
            return true;
          }
        } else {
          console.log('not valid');
          return false;
        }
      } else {
        if (moveDown()) {
          last = 'down';
          if (scroller.x === this.player2.x && scroller.y === this.player2.y) {
            return true;
          }
        } else if (moveRight()) {
          last = 'right';
          if (scroller.x === this.player2.x && scroller.y === this.player2.y) {
            return true;
          }
        } else {
          console.log('not valid');
          return false;
        }
      }
    }
  }
}
