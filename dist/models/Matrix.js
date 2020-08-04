export class Matrix {
  constructor(rows, columns) {
    this.matrix = this.generateMatrix(rows, columns);
  }

  generateMatrix(rows, columns) {
    let matrix = [];
    for (let r = 0; r < rows; r++) {
      let row = [];
      for (let c = 0; c < columns; c++) {
        row.push('e');
      }
      matrix.push(row);
    }
    return matrix;
  }

  getPoint(x, y) {
    return this.matrix[x][y];
  }

  changeVal(x, y, val) {
    this.matrix[x][y] = val;
  }

  findCoordinate(val) {
    for (let r = 0; r < this.matrix.length; r++) {
      for (let c = 0; c < this.matrix[r].length; c++) {
        if (this.matrix[r][c] === val) {
          return { x: c, y: r };
        }
      }
    }
    return null;
  }

  printMatrix() {
    for (let r = 0; r < this.matrix.length; r++) {
      let line = '';
      for (let c = 0; c < this.matrix[r].length; c++) {
        line += `${this.matrix[r][c]}\t`;
      }
      console.log(line);
    }
  }

  printColumn(y) {
    for (let i = 0; i < this.matrix.length; i++) {
      console.log(this.matrix[i][y]);
    }
  }

  printRow(x) {
    for (let i = 0; i < this.matrix.length; i++) {
      console.log(this.matrix[x][i]);
    }
  }
}


