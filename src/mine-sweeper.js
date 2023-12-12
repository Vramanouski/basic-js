const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const result = [];

  for (let row = 0; row < numRows; row++) {
    const newRow = [];

    for (let col = 0; col < numCols; col++) {
      let count = 0;

      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
          if (
            i >= 0 &&
            i < numRows &&
            j >= 0 &&
            j < numCols &&
            !(i === row && j === col)
          ) {
            count += matrix[i][j] ? 1 : 0;
          }
        }
      }

      newRow.push(count);
    }

    result.push(newRow);
  }

  return result;
}

module.exports = {
  minesweeper,
};
