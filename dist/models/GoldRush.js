const Matrix = require('./Matrix');

class GoldRush extends Matrix {
  constructor(rows, columns) {
    super(rows, columns);
    this.rowsNum = rows;
    this.columnsNum = columns;
    this.player1 = { x: 0, y: 0, icon: 1, score: 0 };
    this.player2 = { x: rows - 1, y: columns - 1, icon: 2, score: 0 };
    this.coinsRatio = 0.3;
    this.coins = Math.floor(rows * columns * this.coinsRatio);
  }

  loadGame() {
    this.matrix[0][0] = 1;
    this.matrix[this.rowsNum - 1][this.columnsNum - 1] = 2;

    for (let c = 0; c < this.coins; c++) {
      let x = Math.floor(Math.random() * Math.floor(this.rowsNum));
      let y = Math.floor(Math.random() * Math.floor(this.columnsNum));
      if (
        x !== 0 &&
        y !== 0 &&
        x !== this.rowsNum - 1 &&
        y !== this.columnsNum
      ) {
        this.matrix[x][y] = 'C';
      }
    }
  }

  moveLeft(player) {
    if (player.y === 0) {
      console.log('canot move left');
    } else {
      this.matrix[player.x][player.y] = '.';
      player.y--;
      if (this.matrix[player.x][player.y] === 'C') {
        player.score++;
      }
      this.matrix[player.x][player.y] = player.icon;
    }
  }
  moveRight(player) {
    if (player.y === this.rowsNum - 1) {
      console.log('canot move right');
    } else {
      this.matrix[player.x][player.y] = '.';
      player.y++;
      if (this.matrix[player.x][player.y] === 'C') {
        player.score++;
      }
      this.matrix[player.x][player.y] = player.icon;
    }
  }

  moveDown(player) {
    if (player.x === this.columnsNum - 1) {
      console.log('canot move down');
    } else {
      this.matrix[player.x][player.y] = '.';
      player.x++;
      if (this.matrix[player.x][player.y] === 'C') {
        player.score++;
      }
      this.matrix[player.x][player.y] = player.icon;
    }
  }

  moveUp(player) {
    if (player.x === 0) {
      console.log('canot move up');
    } else {
      this.matrix[player.x][player.y] = '.';
      player.x--;
      if (this.matrix[player.x][player.y] === 'C') {
        player.score++;
      }
      this.matrix[player.x][player.y] = player.icon;
    }
  }

  move(direction, player) {
    direction === 'left'
      ? this.moveLeft(player)
      : direction === 'right'
      ? this.moveRight(player)
      : direction === 'up'
      ? this.moveUp(player)
      : this.moveDown(player);
  }
}

module.exports = GoldRush;
