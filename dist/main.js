import { GameBoard } from './models/GameBoard.js';
import { Renderer } from './views/Renderer.js';

const matrixLimits = { max: 15, min: 4 };

const startGameSound = new Audio('./assets/sounds/newGame.mp3');
const endGameSound = new Audio('./assets/sounds/endGame.mp3');
const moveSound = new Audio('./assets/sounds/right.mp3');
const reMatchSound = new Audio('./assets/sounds/rematch.mp3');

const tieMessageSTR = 'No One Wins';

const renderer = new Renderer();
let board;

$('#board-container').hide();
$('#scores-container').hide();
$('#end-game').hide();

const newGame = () => {
  const rows = $('#rows').val();
  const columns = $('#columns').val();

  if (
    rows < matrixLimits.min ||
    rows > matrixLimits.max ||
    columns < matrixLimits.min ||
    columns > matrixLimits.max
  ) {
    alert(`Only numbers between ${matrixLimits.min} and ${matrixLimits.max}`);
  } else {
    board = new GameBoard(rows, columns);
    board.loadGame();
    renderer.renderBoard(board.matrix);
    renderer.renderScores([board.player1, board.player2]);
    $('#new-game').hide();
    $('#board-container').show();
    $('#scores-container').show();
    $('#rows').val('');
    $('#columns').val('');
    startGameSound.play();
  }
};

const endGame = () => {
  $('#board-container').hide();
  $('#scores-container').hide();
  $('#end-game').show();

  if (board.player1.score > board.player2.score) {
    $('#winner').html(`${board.player1.icon} WINS`);
  } else if (board.player1.score < board.player2.score) {
    $('#winner').html(`${board.player2.icon} WINS`);
  } else {
    $('#winner').html(tieMessageSTR);
  }

  board = null;
  endGameSound.play();
};

$('#start-btn').on('click', newGame);

$('#play-again-btn').on('click', () => {
  reMatchSound.play();
  setTimeout(() => (window.location.href = '/'), 1500);
});

$(document).keypress((e) => {
  if (board) {
    e.which === 119
      ? board.move('up', board.player1)
      : e.which === 115
      ? board.move('down', board.player1)
      : e.which === 97
      ? board.move('left', board.player1)
      : e.which === 100
      ? board.move('right', board.player1)
      : e.which === 105
      ? board.move('up', board.player2)
      : e.which === 107
      ? board.move('down', board.player2)
      : e.which === 106
      ? board.move('left', board.player2)
      : e.which === 108
      ? board.move('right', board.player2)
      : null;

    moveSound.pause();
    moveSound.currentTime = 0;
    moveSound.play();

    renderer.renderBoard(board.matrix);
    renderer.renderScores([board.player1, board.player2]);

    if (!board.coins) {
      endGame();
    }
  }
});
