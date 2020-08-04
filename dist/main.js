import { GoldRush } from './models/GoldRush.js';
import { Renderer } from './views/Renderer.js';

const board = new GoldRush(5, 5);
const renderer = new Renderer();

board.loadGame();
// board.printMatrix();
renderer.renderBoard(board.matrix);
renderer.renderScores([board.player1, board.player2]);
// console.log('#####################################');
board.move('up', board.player2);
board.move('left', board.player2);
board.move('up', board.player2);
// board.printMatrix();
// console.log('#####');
// console.log(board.player2.score);

// renderer.renderBoard(board);
