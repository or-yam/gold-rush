export class Renderer {
  renderBoard(matrix) {
    const source = $('#board-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(matrix);
    $('#board-container').empty().append(newHTML);
  }

  renderScores(players) {
    const source = $('#scores-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(players);
    $('#scores-container').empty().append(newHTML);
  }
}
