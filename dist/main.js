import { GoldRush } from './models/GoldRush.js';
import { Renderer } from './views/Renderer.js';

const renderer = new Renderer();
let board;
$('#board-container').hide();
$('#scores-container').hide();
$('#end').hide();

$('#start').on('click', () => {
  const rows = $('#rows').val();
  const columns = $('#columns').val();
  board = new GoldRush(rows, columns);
  board.loadGame();
  renderer.renderBoard(board.matrix);
  renderer.renderScores([board.player1, board.player2]);
  $('#new-game').hide();
  $('#board-container').show();
  $('#scores-container').show();
  $('#rows').val('');
  $('#columns').val('');
});

$(document).keypress((e) => {
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
  renderer.renderBoard(board.matrix);
  renderer.renderScores([board.player1, board.player2]);
  if (!board.coins) {
    $('#board-container').hide();
    $('#end').show();
  }
});
