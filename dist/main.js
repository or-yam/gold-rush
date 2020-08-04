const GoldRush = require('./models/GoldRush');

//loadNewGame(){}
//movePlayer(){}

const board = new GoldRush(5, 5);
board.loadGame();
board.printMatrix();
// console.log(board.matrix)
console.log('#########################')
board.move('up', board.player2);
board.move('left', board.player2);
board.move('down', board.player2);

board.printMatrix();
