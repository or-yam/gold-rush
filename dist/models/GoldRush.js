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
    this.wallsRatio = 0.2;
    this.walls = Math.floor(rows * columns * this.wallsRatio);
  }

  loadPlayers() {
    this.matrix[this.player1.x][this.player1.y] = this.player1.icon;
    this.matrix[this.player2.x][this.player2.y] = this.player2.icon;
  }

  loadCoins() {
    for (let c = 0; c < this.coins; c++) {
      let x = Math.floor(Math.random() * Math.floor(this.rowsNum));
      let y = Math.floor(Math.random() * Math.floor(this.columnsNum));
      if (this.matrix[x][y] === '.') {
        this.matrix[x][y] = 'C';
      }
    }
  }

  loadWalls() {
    for (let w = 0; w < this.walls; w++) {
      let x = Math.floor(Math.random() * Math.floor(this.rowsNum));
      let y = Math.floor(Math.random() * Math.floor(this.columnsNum));
      if (this.matrix[x][y] === '.') {
        this.matrix[x][y] = 'W';
      }
    }
  }

  loadGame() {
    this.loadPlayers();
    this.loadWalls();
    this.loadCoins();
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
      : console.log('note valid direction');
    if (this.matrix[newPos.x][newPos.y] === 'C') {
      player.coins++;
      this.matrix[player.x][player.y] = '.';
      player.x = newPos.x;
      player.y = newPos.y;
      this.loadPlayers();
    } else if (this.matrix[newPos.x][newPos.y] === '.') {
      this.matrix[player.x][player.y] = '.';
      player.x = newPos.x;
      player.y = newPos.y;
      this.loadPlayers();
    } else if (
      !this.matrix[newPos.x][newPos.y] ||
      this.matrix[newPos.x][newPos.y] !== '.'
    ) {
      console.log(`im sorry im afraid i can't do that`);
    }
  }
}

module.exports = GoldRush;
